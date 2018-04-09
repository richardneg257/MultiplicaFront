import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { UbigeoModel } from '../models';
import { EnviromentsConstants, HostnameConstants } from '../shared/constants';
import { HttpService } from './http.service';
import { Utilities } from './utilities';

@Injectable()
export class UbigeoService {
    private UBIGEO_ENDPOINT: string = 'ubigeo';
    private BASE_URL: string = Utilities.buildRequestURL(
        HostnameConstants.MULTIPLICA_WEBAPI.host);
    private REQUEST_URL: string;
    private URL: string;
    constructor(private httpService: HttpService) {
        this.REQUEST_URL = `${this.BASE_URL}${this.UBIGEO_ENDPOINT}`;
    }

    public getUbigeoById(id: number): Observable<UbigeoModel[]> {
        this.URL = `${this.REQUEST_URL}/${id}`;
        return this.httpService.get(this.URL);
    }
}
