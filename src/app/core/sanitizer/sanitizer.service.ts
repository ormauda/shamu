import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
    providedIn: 'root'
})
export class SanitizerService {

    constructor(private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer) {
        this.initialize();
    }

    initialize(): void {
        this.registerSvgIcon('fart');
    }

    registerSvgIcon(iconName: string) {
        this.iconRegistry.addSvgIcon(iconName, this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${iconName}.svg`));
    }

    getSafeUrl(url: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
