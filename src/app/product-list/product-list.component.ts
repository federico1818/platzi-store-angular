import { Component, Input, OnInit } from '@angular/core'

import { Product } from 'src/app/product'
import { StoreService } from 'src/app/services/store.service'
import { ProductService } from 'src/app/services/product.service'
import { UiService } from 'src/app/services/ui.service'
import { FilesService } from 'src/app/services/files.service'
import { ProductCreateDTO } from 'src/app/product-create-dto'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
    @Input() public products: Product[] = []

    public shoppingCart: Product[] = []
    public shoppingCartTotal: number = 0
    public productDetailActive: boolean = false

    constructor(
        private storeService: StoreService,
        private productService: ProductService,
        private uiService: UiService,
        private _filesService: FilesService
    ) {}

    public ngOnInit(): void {
        this.shoppingCart = this.storeService.shoppingCart
        this.shoppingCartTotal = this.storeService.total
    }

    public showProductDetailModal(product: Product): void {
        this.uiService.showProductDetail(product)
    }

    public create(): void {
        const product: ProductCreateDTO = {
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

    public onChange(event: Event): void {
        const element: HTMLInputElement = event.target as HTMLInputElement
        const file = element.files?.item(0) as Blob
        if(!file) return
        this._filesService.uploadFile(file).subscribe(res => {
            console.log(res)
        })
    }



}
