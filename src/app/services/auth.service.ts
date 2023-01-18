import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, switchMap } from 'rxjs'

import { environment } from 'src/environments/environment'
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/user'
import { Token } from 'src/app/token'

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private url: string = `${ environment.api.url }/auth`

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) {}

    public loginRandomUser(): Observable<Token> {
        return this.userService.all()
        .pipe(
            switchMap((users: User[]) => {
                const random = Math.floor(Math.random() * users.length)
                return this.login(users[random])
            })
        )
    }

    private login(user: User): Observable<Token> {
        return this.http.post<Token>(`${ this.url }/login`, user)
    }
}
