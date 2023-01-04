import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Product } from 'src/app/product'

@Injectable({
    providedIn: 'root'
})

export class StoreService {
    private _shoppingCart: Product[] = []
    private _cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])

    public get cart$(): Observable<Product[]> {
        return this._cart.asObservable()
    }

    public get shoppingCart(): Product[] {
        return this._shoppingCart
    }

    public addProductToShoppingCart(product: Product): void {
        this.shoppingCart.push(product)
        this._cart.next(this._shoppingCart)
    }

    public get total(): number {
        return this.shoppingCart.reduce((sum: number, product: Product) => {
            return product.price + sum
        }, 0)
    }
}
