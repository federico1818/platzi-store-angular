import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Category } from 'src/app/category'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    private _url: string = `${ environment.api.url }/categories`

    constructor(
        private _http: HttpClient
    ) {}

    public all(): Observable<Category[]> {
        return this._http.get<Category[]>(this._url)
    }
}
