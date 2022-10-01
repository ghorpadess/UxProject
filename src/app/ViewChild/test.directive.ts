import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {
  constructor(private ele: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', 'yellow');
  }
}
