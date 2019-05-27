import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';

const API_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class SignUpService {

    constructor(private http: HttpClient) { }

    checkUserNameTaken(userName: string) {

        return this.http.get(API_URL + '/user/exists/' + userName);
    }

    signUp(newUser: NewUser) {
        return this.http.post(API_URL + '/user/signup', newUser);
    }
}