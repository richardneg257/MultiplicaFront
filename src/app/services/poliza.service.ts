import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { PolizaCreateModel, PolizaDetailModel } from '../models';
import { EnviromentsConstants, HostnameConstants } from '../shared/constants';
import { HttpService } from './http.service';
import { Utilities } from './utilities';

@Injectable()
export class PolizaService {
    private POLIZA_ENDPOINT: string = 'poliza';
    private BASE_URL: string = Utilities.buildRequestURL(
        HostnameConstants.MULTIPLICA_WEBAPI.host);
    private REQUEST_URL: string;
    private URL: string;
    constructor(private httpService: HttpService) {
        this.REQUEST_URL = `${this.BASE_URL}${this.POLIZA_ENDPOINT}`;
    }

    public add(product: PolizaCreateModel): Observable<PolizaDetailModel> {
        this.URL = `${this.REQUEST_URL}`;
        return this.httpService.post(this.URL, product);
    }

    public getPolizaById(id: number): Observable<PolizaDetailModel> {
        this.URL = `${this.REQUEST_URL}/${id}`;
        return this.httpService.get(this.URL);
    }
}
