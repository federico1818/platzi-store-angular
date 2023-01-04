import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/product'

import { StoreService } from 'src/app/services/store.service'
import { ProductService } from '../services/product.service'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
    public shoppingCart: Product[] = []
    public shoppingCartTotal: number = 0
    public products: Product[] = []
    public productDetailActive: boolean = false

    constructor(
        private storeService: StoreService,
        private productService: ProductService
    ) {}

    public ngOnInit(): void {
        this.shoppingCart = this.storeService.shoppingCart
        this.shoppingCartTotal = this.storeService.total
        this.productService.all().subscribe((products: Product[]) => {
            this.products = products
        })
    }

    public showProductDetailModal(): void {
        this.productDetailActive = true
    }

    // public addProductToShoppingCart(product: Product): void {
    //     this.storeService.addProductToShoppingCart(product)
    //     this.shoppingCartTotal = this.storeService.total
    // }

    public onProductDetailClosed(): void {
        this.productDetailActive = false
    }

}
