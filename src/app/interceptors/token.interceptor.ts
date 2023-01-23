import { Injectable } from '@angular/core'
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { TokenService } from 'src/app/services/token.service'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private _tokenService: TokenService
    ) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const req = this._tokenService.token?
                    request.clone({
                        headers: request.headers.append('Authorization', `Bearer ${ this._tokenService.token.access_token }`)
                    }): request

        return next.handle(req)
    }
}
