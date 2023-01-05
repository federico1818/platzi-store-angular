import { Injectable } from '@angular/core'
import { Observable, ReplaySubject } from 'rxjs'
import { Product } from 'src/app/product'

@Injectable({
    providedIn: 'root'
})

export class UiService {
    private _onShowProductDetail: ReplaySubject<Product> = new ReplaySubject<Product>()

    public get onShowProductDetail$(): Observable<Product> {
        return this._onShowProductDetail.asObservable()
    }

    public showProductDetail(product: Product): void {
        this._onShowProductDetail.next(product)
    }
}
