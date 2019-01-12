import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'shamu';

    safeURL: SafeResourceUrl;
    
    constructor(private _sanitizer: DomSanitizer) {
        const videoURL = 'https://www.youtube.com/embed/Tp4a3I2Ikko';
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
    }
}
