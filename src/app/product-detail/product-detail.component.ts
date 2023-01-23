import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Product } from 'src/app/product'
import { UiService } from 'src/app/services/ui.service'
import { ProductService } from 'src/app/services/product.service'
import { ProductUpdateDTO } from 'src/app/product-update-dto'
import { FilesService } from 'src/app/services/files.service'

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
    public active: boolean = false
    public downloaded: boolean = false
    public product!: Product

    constructor(
        private uiService: UiService,
        private productService: ProductService,
        private _filesService: FilesService
    ) {}

    public ngOnInit(): void {
        this.downloaded = false
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

    public delete(): void {
        this.productService.delete(this.product.id).subscribe((res: any) => {
            this.close()
        })
    }

    public readAndUpdate(): void {
        this.productService
            .readAndUpdate(this.product.id, { title: 'Update Switch' })
            .subscribe((product: Product) => {
                console.log(product)
            })
    }

    public close(): void {
        this.active = false
    }

    public downloadImage(): void {
        this._filesService.downloadFile(
            'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf',
            this.product.title,
            'application/pdf')
        .subscribe((downloaded: boolean) => {
            this.downloaded = downloaded
        })
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
