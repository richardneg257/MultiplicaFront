import { BaseModel } from './base.model';
export class PolizaCreateModel extends BaseModel {
    id: number;
    departamentoId: number;
    provinciaId: number;
    distritoId: number;
    fechaInicio: Date;
    fechaFin: Date;

    constructor() {
        super();
    }
}
