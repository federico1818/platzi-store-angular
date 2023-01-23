import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { Product } from 'src/app/product'
import { ProductCreateDTO } from 'src/app/product-create-dto'
import { ProductUpdateDTO } from 'src/app/product-update-dto'
import { checkTime } from 'src/app/interceptors/time.interceptor'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private url: string = `${ environment.api.url }/products`

    constructor(
        private http: HttpClient
    ) {}

    public all(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url)
    }

    public get(id: string): Observable<Product> {
        return this.http
                    .get<Product>(`${ this.url }/${ id }`, {
                        context: checkTime()
                    })
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

    public readAndUpdate(id: string, product: ProductUpdateDTO): Observable<Product> {
        return this.get(id).pipe(
            switchMap((p: Product)=> this.update(p.id, product))
        )
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
