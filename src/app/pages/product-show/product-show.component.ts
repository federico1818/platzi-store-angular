import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { filter, map, switchMap } from 'rxjs'
import { Product } from 'src/app/product'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-product-show',
    templateUrl: './product-show.component.html',
    styleUrls: ['./product-show.component.scss']
})

export class ProductShowComponent implements OnInit {
    public product!: Product

    constructor(
        private _route: ActivatedRoute,
        private _location: Location,
        private _productService: ProductService
    ) {}

    public ngOnInit(): void {
        this._route.paramMap.pipe(
            filter((paramMap: ParamMap) => {
                const id: string | null = paramMap.get('id')
                return id != null && /^\d+$/.test(id)
            }),
            map((paramMap: ParamMap) => {
                return paramMap.get('id')!
            }),
            switchMap((id: string) => {
                return this._productService.get(id)
            })
        ).subscribe((product: Product) => {
            this.product = product
        })
    }

    public back(): void {
        this._location.back()
    }
}
