import { Injectable } from '@angular/core'
import { Token } from 'src/app/token'

@Injectable({
    providedIn: 'root'
})

export class TokenService {
    constructor() { }

    get token(): Token {
        return JSON.parse(localStorage.getItem('token')!)
    }

    set token(token: Token) {
        localStorage.setItem('token', JSON.stringify(token))
    }

    public clear(): void {
        localStorage.clear()
    }
}
