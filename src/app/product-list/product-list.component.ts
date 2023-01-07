import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/product'

import { StoreService } from 'src/app/services/store.service'
import { ProductService } from 'src/app/services/product.service'
import { UiService } from 'src/app/services/ui.service'
import { ProductDTO } from '../product-dto'

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

    public showProductDetailModal(product: Product): void {
        this.uiService.showProductDetail(product)
    }

    public create(): void {
        const product: ProductDTO = {
            title: 'New product',
            description: 'New description',
            images: [`https://placeimg.com/640/480/any?random=${ Math.random() }`],
            price: 100,
            categoryId: 2
        }
        this.productService.create(product).subscribe((product: Product) => {
            this.products.unshift(product)
        })
    }

}
