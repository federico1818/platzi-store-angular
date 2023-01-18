import { Component, OnInit } from '@angular/core'
import { StoreService } from 'src/app/services/store.service'
import { Product } from 'src/app/product'
import { AuthService } from 'src/app/services/auth.service'
import { Token } from 'src/app/token'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public shoppingCartLength: number = 0

    constructor(
        private storeService: StoreService,
        private authService: AuthService
    ) {}

    public ngOnInit(): void {
        this.storeService.cart$.subscribe((products: Product[]) => {
            this.shoppingCartLength = products.length
        })
    }

    public login(): void {
        this.authService.loginRandomUser().subscribe((token: Token) => {
            console.log(token)
        })
    }
}
