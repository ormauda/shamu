import { Component, OnInit } from '@angular/core';

import { ControllerService } from 'src/app/core/controller/controller.service';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.less']
})
export class ControlComponent implements OnInit {

    constructor(private controllerService: ControllerService) { }

    ngOnInit() {
    }

    startMoving(): void {
        this.controllerService.motor('start').subscribe(() => {
            console.log(`success!`);
        });
    }

    stopMoving(): void {
        this.controllerService.motor('stop').subscribe(() => {
            console.log(`success!`);
        });
    }

}
