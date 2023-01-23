import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { saveAs } from 'file-saver'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class FilesService {
    private _url: string = `${ environment.api.url }/files`

    constructor(
        private _http: HttpClient
    ) {}

    public downloadFile(url: string, name: string, type: string): Observable<boolean> {
        return this.getFile(url).pipe(
            tap((content: Blob) => {
                const blob = new Blob([content], { type: type })
                saveAs(blob, name)
            }),
            map(_ => {
                return true
            })
        )
    }

    public uploadFile(file: Blob): Observable<any> {
        const form = new FormData()
        form.append('file', file)

        return this._http.post<any>(`${ this._url }/upload`, form)
    }

    private getFile(url: string): Observable<Blob> {
        return this._http.get(url, { responseType: 'blob' })
    }
}
