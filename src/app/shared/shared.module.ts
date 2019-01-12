import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CustomMaterialModule } from './custom-material/custom-material.module';


@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        CustomMaterialModule,
        HttpClientModule
    ]
})
export class SharedModule { }
