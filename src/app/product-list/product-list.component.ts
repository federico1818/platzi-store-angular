import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/product'

import { StoreService } from 'src/app/services/store.service'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
    public shoppingCart: Product[] = []
    public shoppingCartTotal: number = 0

    constructor(
        private storeService: StoreService
    ) {}

    public ngOnInit(): void {
        this.shoppingCart = this.storeService.shoppingCart
        this.shoppingCartTotal = this.storeService.total
    }

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
        this.storeService.addProductToShoppingCart(product)
        this.shoppingCartTotal = this.storeService.total
    }

}
