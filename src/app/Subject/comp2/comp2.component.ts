import { Component, OnInit } from '@angular/core';

import { DesignUtilityService } from 'src/app/Service/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  public updatedProduct: string = 'Laptop';

  public userName: string = '';

  constructor(private mySer: DesignUtilityService) {
    this.mySer.updatedProduct.subscribe(data => {
      this.updatedProduct = data;
    })
  }

  ngOnInit(): void {
    this.mySer.updateUser.subscribe(data => {
      this.userName = data;
    })
  }

  public onUpdateProduct(pro: any) {
    this.mySer.updatedProduct.next(pro.value);
  }

  // BehaviorSubject
  public onUpdateUser(uname: any) {
    this.mySer.updateUser.next(uname.value);
  }
}
