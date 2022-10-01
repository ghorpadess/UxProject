import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild('box') box!: ElementRef;

  @ViewChild(Child1Component) child!: Child1Component;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.box.nativeElement.style.backgroundColor = 'Yellow';
    // this.box.nativeElement.classList = 'our';
    // this.box.nativeElement.innerText = 'Our product is Mobile'

    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'yellow');
  }
  product: any = 'Swapnilssssssss';
  ngAfterContentInit(): void {}

  changeText(val: any) {
    this.child.product = val.value;
    this.product = val.value;
  }

  callMethod() {
    this.child.onClick();
  }
}
