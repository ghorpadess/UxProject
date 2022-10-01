import { Component, OnInit } from '@angular/core';

import { DesignUtilityService } from '../Service/design-utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isHeader: any;
  showHeader: any;

  constructor(private mySer: DesignUtilityService) {
    this.mySer.isHeader.subscribe((res) => {
      this.isHeader = res;
      sessionStorage.setItem('isHeader', this.isHeader);
    });
  }

  ngOnInit(): void {
    this.showHeader = sessionStorage.getItem('isHeader');
  }
}
