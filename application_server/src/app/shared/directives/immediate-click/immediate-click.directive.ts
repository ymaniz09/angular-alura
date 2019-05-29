import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Directive({
    selector: '[appImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private platformDetectorService: PlatformDetectorService) { }

    ngOnInit(): void {
        if (this.platformDetectorService.isPlatformBrowser()) {
            this.element.nativeElement.click();
        }
    }
}
