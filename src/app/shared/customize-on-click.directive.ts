import { Directive, Renderer2, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomizeOnClick]'
})
export class CustomizeOnClickDirective {

  @Input('appCustomizeOnClick') customColor: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click') onClick() {
    this.render.setStyle(this.el.nativeElement, 'color', this.customColor);
  }

}
