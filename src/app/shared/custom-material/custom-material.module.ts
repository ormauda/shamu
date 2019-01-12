import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatSliderModule,
        MatButtonToggleModule
    ]
})
export class CustomMaterialModule { }
