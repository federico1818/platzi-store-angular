import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { User } from 'src/app/user'

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
    public active: boolean = false
    public user: User | null = null

    constructor(
        private _authService: AuthService
    ) {}

    public login(): void {
        this._authService.loginRandomUser().subscribe((user: User) => {
            this.user = user
        })
    }

    public toggleUserBox(): void {
        this.active = !this.active
    }

    public logout(): void {
        this._authService.logout()
        this.active = false
        this.user = null
    }
}
