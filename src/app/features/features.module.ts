import { NgModule } from '@angular/core';

import { ControlComponent } from './control/control.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ControlComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ControlComponent
    ]
})
export class FeaturesModule { }
