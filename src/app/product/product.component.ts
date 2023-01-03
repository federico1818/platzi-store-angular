import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from '../product'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
    @Input() public product!: Product
    @Output() public addedProduct: EventEmitter<Product> = new EventEmitter<Product>

    public addProductToShoppingCart(): void {
        this.addedProduct.emit(this.product)
    }
}
