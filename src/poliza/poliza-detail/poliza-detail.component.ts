import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PolizaDetailModel } from '../../app/models';
import { UbigeoService, PolizaService } from '../../app/services';
import { FormStatusConstants } from '../../app/shared/constants';


@Component({
    selector: 'app-poliza-detail',
    templateUrl: './poliza-detail.component.html',
    styleUrls: ['./poliza-detail.component.css'],
})

export class PolizaDetailComponent implements OnInit, OnDestroy {
    polizaId:number;
    poliza: PolizaDetailModel= new PolizaDetailModel();
    fechaInicioFormato: string;
    fechaFinFormato: string;

    constructor(private polizaService: PolizaService, private route: ActivatedRoute, private router: Router,) {
        this.route.params.subscribe(params => {
            this.polizaId = params.id;
            this.getPolizaById();
        });
    }

    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
        // any
    }

    getPolizaById():void{
        this.polizaService.getPolizaById(this.polizaId).subscribe(
            (result: any) => {
                this.poliza = result;
                this.fechaInicioFormato=this.formatFecha(new Date(result.FechaInicio));
                this.fechaFinFormato=this.formatFecha(new Date(result.FechaFin));
            },
            error => console.error(error)
        );
    }

    formatFecha(fecha: Date){
        let fechaSinFormato: Date = fecha;
        var mes=fechaSinFormato.getMonth()+1;
        var cadena=fechaSinFormato.getDate()+"/"+mes+"/"+fechaSinFormato.getFullYear();
        return cadena;
    }

    cerrarPoliza(){
        this.router.navigate([`/poliza`]);
    }
    
}
