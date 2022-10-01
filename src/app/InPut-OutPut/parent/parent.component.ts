import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public productSelected: boolean = false;
  public selectedProduct: string = '';
  public isProductSelect: any;
  constructor() { }

  ngOnInit(): void {
  }

  public onClick(product: any) {
    this.productSelected = true;
    this.selectedProduct = product;
  }

  productAddToCart(proData: any) {
    this.isProductSelect = proData;
  }
}
