import { Component, OnInit } from '@angular/core'

import { Product } from 'src/app/product'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    public products: Product[] = []

    constructor(
        private _productService: ProductService,
    ) {}

    public ngOnInit(): void {
        this.getProducts()
    }

    private getProducts(): void {
        this._productService.paginate(0, 10).subscribe((products: Product[]) => {
            this.products = products
        })
    }
}
