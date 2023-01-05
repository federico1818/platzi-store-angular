import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Product } from 'src/app/product'

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(
        private http: HttpClient
    ) {}

    public all(): Observable<Product[]> {
        return this.http.get<Product[]>('https://young-sands-07814.herokuapp.com/api/products')
    }

    public get(id: string): Observable<Product> {
        return this.http.get<Product>(`https://young-sands-07814.herokuapp.com/api/products/${ id }`)
    }
}
