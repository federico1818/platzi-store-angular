import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { saveAs } from 'file-saver'

@Injectable({
    providedIn: 'root'
})

export class FilesService {
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

    private getFile(url: string): Observable<Blob> {
        return this._http.get(url, { responseType: 'blob' })
    }
}
