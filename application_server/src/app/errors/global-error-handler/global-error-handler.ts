import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import * as StackTrace from 'stacktrace-js';

import { UserService } from 'src/app/core/user/user.service';
import { ServerLogService } from './server-log.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(
        private injector: Injector,
        private serverLogService: ServerLogService
    ) { }

    handleError(error: any): void {

        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const router = this.injector.get(Router);

        const message = error.message ? error.message : error.toString();
        const url = location instanceof PathLocationStrategy ? location.path() : '';


        if (environment.production) {
            router.navigate(['/error']);
        }

        StackTrace.fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n');
                console.log(message);
                console.log(stackAsString);
                console.log({ message, url, userName: userService.getUserName(), stack: stackAsString });

                this.serverLogService.log({
                    message,
                    url,
                    userName: userService.getUserName(),
                    stack: stackAsString
                })
                    .subscribe(() => {
                        console.log('Error logged on server');
                    },
                        err => {
                            console.log(err);
                            console.log('Failed to send error to server');
                        });
            });
    }
}
