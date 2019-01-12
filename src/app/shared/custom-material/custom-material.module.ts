import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    exports: [
        MatButtonModule,
        MatIconModule,
        HttpClientModule
    ]
})
export class CustomMaterialModule { }
