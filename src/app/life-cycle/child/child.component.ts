import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() userData: any
  dataFormParent: string = '';

  constructor() {
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy is called')
    this.userData
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called')
  }
  ngDoCheck(): void {
    console.log('Do check is called')
  }

  ngOnInit(): void {
    console.log('NgONInIt is called')
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataFormParent = this.userData;
    console.log(this.dataFormParent)
    console.log('ngOnChange is called')
  }

  onRemoveData() {
    this.dataFormParent
  }

}
