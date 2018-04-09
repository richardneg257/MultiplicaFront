import { BaseModel } from './base.model';
export class PolizaDetailModel extends BaseModel {
    Id: number;
    departamentoId: number;
    departamentoDescripcion: string;
    provinciaId: number;
    provinciaDescripcion: string;
    distritoId: number;
    distritoDescripcion: string;
    fechaInicio: Date;
    fechaFin: Date;

    constructor() {
        super();
    }
}
