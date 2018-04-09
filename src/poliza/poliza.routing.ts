import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolizaCrearComponent } from './poliza-crear/poliza-crear.component';
import { PolizaDetailComponent } from './poliza-detail/poliza-detail.component';

const polizaRoutes: Routes = [
    {
        path: '',
        component: PolizaCrearComponent,
    },
    {
        path: ':id/detail',
        component: PolizaDetailComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'poliza',
    },
];

@NgModule({
    imports: [ RouterModule.forChild(polizaRoutes) ],
    exports: [ RouterModule ],
})

export class PolizaRoutingModule { }
