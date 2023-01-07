import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Product } from 'src/app/product'
import { ProductDTO } from 'src/app/product-dto'

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private url: string = 'https://young-sands-07814.herokuapp.com/api/products'

    constructor(
        private http: HttpClient
    ) {}

    public all(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url)
    }

    public get(id: string): Observable<Product> {
        return this.http.get<Product>(`${ this.url }/${ id }`)
    }

    public create(product: ProductDTO): Observable<Product> {
        return this.http.post<Product>(this.url, product)
    }
}
