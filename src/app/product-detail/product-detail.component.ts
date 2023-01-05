import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Product } from 'src/app/product'
import { UiService } from 'src/app/services/ui.service'

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
    public active: boolean = false

    constructor(
        private uiService: UiService
    ) {}

    public ngOnInit(): void {
        this.uiService.onShowProductDetail$.subscribe((product: Product) => {
            this.active = true
        })
    }

    public close(): void {
        this.active = false
    }
}
