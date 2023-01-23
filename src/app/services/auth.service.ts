import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, switchMap } from 'rxjs'

import { environment } from 'src/environments/environment'
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/user'
import { Token } from 'src/app/token'

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private _url: string = `${ environment.api.url }/auth`
    private _token!: Token
    private _user!: User

    constructor(
        private _http: HttpClient,
        private userService: UserService
    ) {}

    public loginRandomUser(): Observable<User> {
        return this.userService.all()
        .pipe(
            switchMap((users: User[]) => {
                const random = Math.floor(Math.random() * users.length)
                this._user = users[random]
                return this.login(this._user)
            })
        )
    }

    public isLoggedIn(): boolean {
        return !!this._token
    }

    public get user(): User {
        return this._user
    }

    private login(user: User): Observable<User> {
        return this._http.post<Token>(`${ this._url }/login`, user).pipe(
            switchMap((token: Token)=> {
                this._token = token
                return this.getProfile()
            })
        )
    }

    private getProfile(): Observable<User> {
        const headers = new HttpHeaders()
                            .set('Authorization', `Bearer ${ this._token.access_token }`)

        return this._http.get<User>(`${ this._url }/profile`, {
            headers: headers
        })
    }
}
