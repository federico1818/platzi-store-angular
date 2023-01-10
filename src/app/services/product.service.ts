import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { Product } from 'src/app/product'
import { ProductCreateDTO } from 'src/app/product-create-dto'
import { ProductUpdateDTO } from 'src/app/product-update-dto'

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
        return this.http
                    .get<Product>(`${ this.url }/${ id }`)
                    .pipe(
                        catchError((error: HttpErrorResponse) => {
                            return throwError(() => error)
                        })
                    )
    }

    public create(product: ProductCreateDTO): Observable<Product> {
        return this.http.post<Product>(this.url, product)
    }

    public update(id: string, product: ProductUpdateDTO): Observable<Product> {
        return this.http.put<Product>(`${ this.url }/${ id }`, product).pipe(
            map((product: Product) => {
                return product
            })
        )
    }

    public delete(id: string): Observable<any> {
        return this.http.delete<any>(`${ this.url }/${ id }`)
    }

    public paginate(offset: number, limit: number): Observable<Product[]> {
        const params = new HttpParams()
                            .append('limit', limit)
                            .append('offset', offset)

        return this.http.get<Product[]>(this.url, {
            params: params
        })
    }
}
