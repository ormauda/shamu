import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from './custom-material/custom-material.module';


@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        CustomMaterialModule
    ]
})
export class SharedModule { }
