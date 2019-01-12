import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import { SanitizerService } from './core/sanitizer/sanitizer.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'shamu';

    safeURL: SafeResourceUrl;
    
    constructor(private sanitizerService: SanitizerService) {
        const videoURL = 'https://www.youtube.com/embed/Tp4a3I2Ikko';
        this.safeURL = this.sanitizerService.getSafeUrl(videoURL);
    }
}
