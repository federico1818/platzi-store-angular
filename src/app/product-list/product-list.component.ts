import { Component } from '@angular/core'
import { Product } from 'src/app/product'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
    public products: Product[] = [
        {
            id: 1,
            name: 'Auto',
            price: 199.99,
            image: 'https://picsum.photos/300'
        },
        {
            id: 2,
            name: 'Muñeca',
            price: 19.99,
            image: 'https://picsum.photos/300'
        },
        {
            id: 3,
            name: 'Pelota',
            price: 59.99,
            image: 'https://picsum.photos/300'
        },
    ]

    public addProductToShoppingCart(product: Product): void {
        console.log(product)
    }
}
