import { Component, OnInit } from '@angular/core';

import { DesignUtilityService } from 'src/app/Service/design-utility.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private mySer: DesignUtilityService) { }
  searchPro: string = '';

  productList = [
    {
      'sr': '1',
      'name': 'Mobile(Moto)',
      'price': '12000'
    },
    {
      'sr': '2',
      'name': 'TellVision (LG)',
      'price': '22000'
    },
    {
      'sr': '3',
      'name': 'Washing Machine',
      'price': '20000'
    },
    {
      'sr': '4',
      'name': 'Laptop (HP)',
      'price': '55000'
    },
    {
      'sr': '5',
      'name': 'Mobile (Nokia)',
      'price': '11000'
    },
    {
      'sr': '6',
      'name': 'Laptop (Dell)',
      'price': '50000'
    },
    {
      'sr': '7',
      'name': 'Mobile (Samsung)',
      'price': '15000'
    },
  ]
  ngOnInit(): void {

    // this.mySer.grtProduct().subscribe(data => {
    //   this.productList = data
    // })
  }

  clearSearch() {
    this.searchPro = ''
  }

}
