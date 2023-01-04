import { Directive, ElementRef, Renderer2 } from '@angular/core'

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {
    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) {
        this.renderer.setStyle(this.element.nativeElement, 'color', 'black')
    }
}
