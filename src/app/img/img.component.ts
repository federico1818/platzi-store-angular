import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})

export class ImgComponent {
    @Input() public src: string = ''

    public onError(): void {
        console.log('onError')
    }
}
