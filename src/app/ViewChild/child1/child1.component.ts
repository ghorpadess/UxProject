import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {
  public product: string = 'Laptop';
  constructor(private renderer: Renderer2) {}
  @ViewChild('asd') asa: ElementRef | undefined;
  ngOnInit(): void {}

  onClick() {
    alert(this.product);
  }

  changeColor(color: any) {
    this.renderer.setStyle(this.asa?.nativeElement, 'backgroundColor', color);
  }
}
