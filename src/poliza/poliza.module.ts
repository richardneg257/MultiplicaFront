import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UbigeoService, PolizaService } from '../app/services';
import { SharedComponentModule } from '../app/shared/shared.module';
import { PolizaCrearComponent } from './poliza-crear/poliza-crear.component';
import { PolizaDetailComponent } from './poliza-detail/poliza-detail.component';
import { PolizaRoutingModule } from './poliza.routing';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    declarations: [
        PolizaCrearComponent,
        PolizaDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentModule,
        PolizaRoutingModule,
        MyDatePickerModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        UbigeoService,
        PolizaService
    ],
})

export class PolizaModule {

}
