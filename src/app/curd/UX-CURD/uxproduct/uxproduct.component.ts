import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { CurdService } from '../curd.service';

@Component({
  selector: 'app-uxproduct',
  templateUrl: './uxproduct.component.html',
  styleUrls: ['./uxproduct.component.css'],
})
export class UxproductComponent implements OnInit {
  products: any[] = [];
  isEdit: boolean = false;

  @ViewChild('pId')
  id!: ElementRef<any>;
  @ViewChild('pName')
  name!: ElementRef;
  @ViewChild('pPrice')
  price!: ElementRef;
  public editIndex: any;

  constructor(private uxService: CurdService) {}

  ngOnInit(): void {
    this.onGetProduct();
  }

  onAddProduct(pId: any, pName: any, pPrice: any) {
    if (this.isEdit) {
      this.products[this.editIndex] = {
        id: pId.value,
        name: pName.value,
        price: pPrice.value,
      };
      this.isEdit = false;
      (this.id.nativeElement.value = ''),
        (this.name.nativeElement.value = ''),
        (this.price.nativeElement.value = '');
    } else {
      this.products.push({
        id: pId.value,
        name: pName.value,
        price: pPrice.value,
      });
      (this.id.nativeElement.value = ''),
        (this.name.nativeElement.value = ''),
        (this.price.nativeElement.value = '');
    }
    this.onSaveProduct();
  }

  onSaveProduct() {
    this.uxService.onSaveProductData(this.products).subscribe((res) => {});
  }

  onGetProduct() {
    this.uxService.onGetData().subscribe((res) => {
      const allProduct = JSON.stringify(res);
      this.products = JSON.parse(allProduct);
    });
  }

  deleteProduct(id: any) {
    this.products.splice(id, 1);
    this.onSaveProduct();
  }

  editProduct(index: number) {
    this.isEdit = true;
    this.editIndex = index;
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
    this.onSaveProduct();
  }
}
