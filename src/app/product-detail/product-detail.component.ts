import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent {
    @Output() public closed: EventEmitter<boolean> = new EventEmitter<boolean>()

    public close(): void {
        this.closed.emit(true)
    }
}
