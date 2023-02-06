import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { filter, map } from 'rxjs'
import { Product } from 'src/app/product'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

    public products!: Product[]

    constructor(
        private _route: ActivatedRoute,
        private _productService: ProductService
    ) {}

    public ngOnInit(): void {
        this._route.paramMap.pipe(
            filter((paramMap: ParamMap) => {
                const id: string | null = paramMap.get('id')
                return id != null && /^\d+$/.test(id)
            }),
            map((paramMap: ParamMap) => {
                return parseInt(paramMap.get('id')!)
            })
        ).subscribe((id: number) => {
            this._productService.getByCategory(id, 0, 10).subscribe((products: Product[]) => {
                this.products = products
            })
        })
    }
}
