import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/product'

import { StoreService } from 'src/app/services/store.service'
import { ProductService } from 'src/app/services/product.service'
import { UiService } from 'src/app/services/ui.service'

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
        private productService: ProductService,
        private uiService: UiService
    ) {}

    public ngOnInit(): void {
        this.shoppingCart = this.storeService.shoppingCart
        this.shoppingCartTotal = this.storeService.total
        this.productService.all().subscribe((products: Product[]) => {
            this.products = products
        })
    }

    public showProductDetailModal(): void {
        this.uiService.showProductDetail(this.products[0])
    }

    // public addProductToShoppingCart(product: Product): void {
    //     this.storeService.addProductToShoppingCart(product)
    //     this.shoppingCartTotal = this.storeService.total
    // }

    public onProductDetailClosed(): void {
        this.productDetailActive = false
    }

}
