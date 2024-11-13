import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiCompanyService {
    url = 'https://cms-back-mbr.up.railway.app/api';
    private jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getCompany(): Observable<any> {
        return this.http.get(`${this.url}/companies`);
    }

    sendMensage(message: any): Observable<any> {
        return this.http.post(`${this.url}/messages`, message, { headers: this.jsonHeaders });
    }

}