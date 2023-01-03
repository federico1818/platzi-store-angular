import { Injectable } from '@angular/core'
import { Product } from 'src/app/product'

@Injectable({
    providedIn: 'root'
})

export class StoreService {
    private _shoppingCart: Product[] = []

    public get shoppingCart(): Product[] {
        return this._shoppingCart
    }

    public addProductToShoppingCart(product: Product): void {
        this.shoppingCart.push(product)
    }

    public get total(): number {
        return this.shoppingCart.reduce((sum: number, product: Product) => {
            return product.price + sum
        }, 0)
    }
}
