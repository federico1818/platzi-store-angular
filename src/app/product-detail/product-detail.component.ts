import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Product } from 'src/app/product'
import { UiService } from 'src/app/services/ui.service'
import { ProductService } from 'src/app/services/product.service'
import { ProductUpdateDTO } from 'src/app/product-update-dto'

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
    public active: boolean = false
    public product!: Product

    constructor(
        private uiService: UiService,
        private productService: ProductService
    ) {}

    public ngOnInit(): void {
        this.uiService.onShowProductDetail$.subscribe((product: Product) => {
            this.show()
            this.getProduct(product)
        })
    }

    public update(): void {
        const changes: ProductUpdateDTO = {
            title: 'New title'
        }
        this.productService.update(this.product.id, changes).subscribe((product: Product) => {
            this.product = product
        })
    }

    public close(): void {
        this.active = false
    }

    private show(): void {
        this.active = true
    }

    private getProduct(product: Product) {
        this.productService.get(product.id).subscribe((product: Product) => {
            this.product = product
        })
    }
}
