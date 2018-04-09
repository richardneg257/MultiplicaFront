import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UbigeoModel, PolizaCreateModel, PolizaDetailModel } from '../../app/models';
import { UbigeoService, PolizaService } from '../../app/services';
import { FormStatusConstants } from '../../app/shared/constants';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';


@Component({
    selector: 'app-poliza-crear',
    templateUrl: './poliza-crear.component.html',
    styleUrls: ['./poliza-crear.component.css'],
})

export class PolizaCrearComponent implements OnInit, OnDestroy {
    departamentoCombo: UbigeoModel[] = [];
    provinciaCombo: UbigeoModel[] = [];
    distritoCombo: UbigeoModel[] = [];
    departamentoModel: number;
    provinciaModel: number;
    distritoModel: number;
    formStatus = FormStatusConstants.NEW;
    currentDate = new Date();
    hoy=new Date();
    ayer=new Date();
    fechaFinFormato:any;

    polizaForm = new FormGroup({
        departamentoControl: new FormControl(null, [Validators.required]),
        provinciaControl: new FormControl(null, [Validators.required]),
        distritoControl: new FormControl(null, [Validators.required]),
        inicioControl: new FormControl(null, [Validators.required])
    });

    public myDatePickerOptionsInicio: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        dayLabels: { su: "Do", mo: "Lu", tu: "Ma", we: "Mi", th: "Ju", fr: "Vi", sa: "Sa" },
        monthLabels: { 1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic" },
        todayBtnTxt: "Hoy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        editableDateField: false,
        showClearDateBtn: false,
        disableUntil: {year: 0, month: 0, day: 0}
    };

    public inicioModel: any;

    constructor(private ubigeoService: UbigeoService, private polizaService: PolizaService, private route: ActivatedRoute, private router: Router,) {
        this.ayer.setDate(this.ayer.getDate() - 1);
        this.myDatePickerOptionsInicio.disableUntil = { year: this.ayer.getFullYear(), month: this.ayer.getMonth() + 1, day: this.ayer.getDate() };
        this.inicioModel = { date: { year: this.hoy.getFullYear(), month: this.hoy.getMonth() + 1, day: this.hoy.getDate() } };

        let selectionDate: Date = new Date();
        selectionDate.setFullYear(selectionDate.getFullYear() + 1);
        var mes=selectionDate.getMonth()+1;
        this.fechaFinFormato=selectionDate.getDate()+"/"+mes+"/"+selectionDate.getFullYear();
    }

    ngOnInit(): void {
        this.departamentoCombo=[];
        this.provinciaCombo = [];
        this.distritoCombo = [];
        this.departamentoModel=null;
        this.provinciaModel=null;
        this.distritoModel=null;
        this.ubigeoService.getUbigeoById(null).subscribe(
            (result: UbigeoModel[]) => {
                this.departamentoCombo = result;
            },
            error => console.error(error)
        );
    }

    ngOnDestroy(): void {
        // any
    }

    onChangeDepartamento(newValue):void{
        this.provinciaModel=null;
        this.distritoModel=null;
        if(newValue!=undefined){
            this.provinciaCombo = [];
            this.distritoCombo = [];
            this.ubigeoService.getUbigeoById(newValue).subscribe(
                (result: UbigeoModel[]) => {
                    this.provinciaCombo = result;
                },
                error => console.error(error)
            );
        }
    }

    onChangeProvincia(newValue):void{
        this.distritoModel=null;
        if(newValue!=undefined){
            this.distritoCombo = [];
            this.ubigeoService.getUbigeoById(newValue).subscribe(
                (result: UbigeoModel[]) => {
                    this.distritoCombo = result;
                },
                error => console.error(error)
            );
        }
    }

    onInitialDateChanged(event: IMyDateModel) {
        let selectionDate: Date = new Date(event.date.year, event.date.month - 1, event.date.day);
        selectionDate.setFullYear(selectionDate.getFullYear() + 1);
        var mes=selectionDate.getMonth()+1;
        this.fechaFinFormato=selectionDate.getDate()+"/"+mes+"/"+selectionDate.getFullYear();
    }

    savePoliza():void{
        var inicio=new Date(this.inicioModel.date.year, this.inicioModel.date.month - 1, this.inicioModel.date.day);
        var fin=new Date(this.inicioModel.date.year, this.inicioModel.date.month - 1, this.inicioModel.date.day);
        fin.setFullYear(fin.getFullYear() + 1);

        let model=new PolizaCreateModel();
        model.departamentoId=this.departamentoModel;
        model.provinciaId=this.provinciaModel;
        model.distritoId=this.distritoModel;
        model.fechaInicio=inicio;
        model.fechaFin=fin;

        this.polizaService.add(model).subscribe(
            (poliza: PolizaDetailModel) => {
                this.router.navigate([`/poliza/${poliza.Id}/detail`]);
            },
            error => console.error(error)
        );
    }
}
