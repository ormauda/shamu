import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';

@NgModule({
    declarations: [
        AppComponent,
        ControlComponent
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
