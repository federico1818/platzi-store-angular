import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { User } from 'src/app/user'

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private url: string = `${ environment.api.url }/users`

    constructor(
        private http: HttpClient
    ) {}

    public all(): Observable<User[]> {
        return this.http.get<User[]>(`${ this.url }`)
    }
}
