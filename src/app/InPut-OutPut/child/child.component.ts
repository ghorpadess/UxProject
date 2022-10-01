import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponentComponent implements OnInit, OnChanges {
  @Input() isSelected: boolean = false;
  @Input() selected: string = '';
  @Output() isProductSelect = new EventEmitter();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  onAddToCart() {
    this.isProductSelect.emit(this.selected);
  }
}
