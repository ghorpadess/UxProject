import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
  dataFromParent: string = 'Swapnil'

  constructor() {
  }

  ngOnInit(): void {
  }

  onSendData(uName: any) {
    this.dataFromParent = uName.value
  }

}
