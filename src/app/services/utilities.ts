import { Injectable } from '@angular/core';

@Injectable()
export class Utilities {
    public static buildRequestURL(host: string, prefix: string = 'api') {
        return `${host}${prefix}/`;
    }
}
