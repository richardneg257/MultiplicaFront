import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    imports: [NgxDatatableModule],
    declarations: [],
    bootstrap: [],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [NgxDatatableModule],
    providers: [],
})
export class SharedComponentModule {

}
