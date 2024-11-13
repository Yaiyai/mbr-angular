import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class ApiVariantsService {
    url = 'https://cms-back-mbr.up.railway.app/api';
    constructor(private http: HttpClient, private translate: TranslateService) { }

    getVariants(): Observable<any> {
        return this.http.get(`${this.url}/posts`);
    }

    getVariantByCategory(variantCategory: string): Observable<any> {
        let lang = this.translate.currentLang.toUpperCase();
        return this.http.get(`${this.url}/posts/category/${variantCategory}?language=${lang}`);
    }

}