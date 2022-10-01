import { Component, OnInit } from '@angular/core';

import { DesignUtilityService } from 'src/app/Service/design-utility.service';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {

  public updatedProduct: string = 'Laptop';

  public userName: string = '';

  constructor(private mySer: DesignUtilityService) { }

  ngOnInit(): void {
    this.mySer.updatedProduct.subscribe(data => {
      this.updatedProduct = data;
    })

    this.mySer.updateUser.subscribe(data => {
      this.userName = data;
    })
  }

}
