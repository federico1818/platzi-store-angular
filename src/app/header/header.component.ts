import { Component, OnInit } from '@angular/core'
import { StoreService } from 'src/app/services/store.service'
import { Product } from 'src/app/product'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public shoppingCartLength: number = 0

    constructor(
        private storeService: StoreService
    ) {}

    public ngOnInit(): void {
        this.storeService.cart$.subscribe((products: Product[]) => {
            this.shoppingCartLength = products.length
        })
    }
}
