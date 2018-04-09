import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'poliza',
        loadChildren: './../poliza/poliza.module#PolizaModule',
    },
    {
        path: '**',
        redirectTo: 'poliza',
        pathMatch: 'full',
    },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports: [
      RouterModule,
  ],
})

export class AppRoutingModule { }
