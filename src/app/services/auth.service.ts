import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, switchMap, tap } from 'rxjs'

import { environment } from 'src/environments/environment'
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/user'
import { Token } from 'src/app/token'
import { TokenService } from 'src/app/services/token.service'

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private _url: string = `${ environment.api.url }/auth`
    private _user: User | null = null

    constructor(
        private _http: HttpClient,
        private _userService: UserService,
        private _tokenService: TokenService
    ) {}

    public loginRandomUser(): Observable<User> {
        return this._userService.all()
        .pipe(
            switchMap((users: User[]) => {
                const random = Math.floor(Math.random() * users.length)
                this._user = users[random]
                return this.login(this._user)
            }),
            switchMap(_ => {
                return this.getProfile()
            })
        )
    }

    public logout(): boolean {
        this._user = null
        this._tokenService.clear()
        return true
    }

    public isLoggedIn(): boolean {
        return !!this._tokenService.token
    }

    public get user(): User {
        return this._user!
    }

    private login(user: User): Observable<Token> {
        return this._http.post<Token>(`${ this._url }/login`, user).pipe(
            tap((token: Token) => {
                this._tokenService.token = token
            })
        )
    }

    private getProfile(): Observable<User> {
        return this._http.get<User>(`${ this._url }/profile`)
    }
}
