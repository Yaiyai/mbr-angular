import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiSectionsService {
    url = 'https://cms-back-mbr.up.railway.app/api';
    constructor(private http: HttpClient) { }

    getSection(sectionId: string): Observable<any> {
        return this.http.get(`${this.url}/sections/${sectionId}`);
    }

}