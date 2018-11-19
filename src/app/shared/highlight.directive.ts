import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input("appHighlight") appHighlight: string;

  private currentColor = "transparent";

  constructor() { }

  @HostListener('mouseenter')
  onmouseenter(event) {    
    this.currentColor = this.appHighlight;
  }

  @HostListener("mouseleave")
  onmouseleave(event) {
    this.currentColor = null;
  }

  @HostBinding("style.backgroundColor") get getBackgroundColor() {
    return this.currentColor;
  }
}
