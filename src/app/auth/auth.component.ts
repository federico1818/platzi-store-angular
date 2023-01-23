import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { User } from 'src/app/user'

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
    public isLoggedIn: boolean = false
    public user!: User

    constructor(
        private _authService: AuthService
    ) {}

    public ngOnInit(): void {
        this.isLoggedIn = this._authService.isLoggedIn()
    }

    public login(): void {
        this._authService.loginRandomUser().subscribe((user: User) => {
            this.isLoggedIn = true
            this.user = user
        })
    }

    public logout(): void {

    }
}
