import { Component, OnInit } from '@angular/core'
import { StoreService } from 'src/app/services/store.service'
import { Product } from 'src/app/product'
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/user'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public shoppingCartLength: number = 0

    constructor(
        private storeService: StoreService,
        private userService: UserService
    ) {}

    public ngOnInit(): void {
        this.storeService.cart$.subscribe((products: Product[]) => {
            this.shoppingCartLength = products.length
        })
    }

    public login(): void {
        this.userService.all().subscribe((users: User[]) => {
            console.log(users)
        })
    }
}
