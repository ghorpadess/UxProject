import { Component, OnInit } from '@angular/core';

import { DesignUtilityService } from 'src/app/Service/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  updatedProduct: string = 'Laptop';

  userName: string = '';

  constructor(private mySer: DesignUtilityService) {
    this.mySer.updatedProduct.subscribe((data) => {
      this.updatedProduct = data;
    });
  }

  ngOnInit(): void {
    this.mySer.updateUser.subscribe((data) => {
      this.userName = data;
    });
  }

  onUpdateProduct(pro: any) {
    this.mySer.updatedProduct.next(pro.value);
  }

  // BehaviorSubject
  public onUpdateUser(uname: any) {
    this.mySer.updateUser.next(uname.value);
  }
}
