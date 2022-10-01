import { Component, OnInit } from '@angular/core';

import { CurdAllServiceService } from '../curd-all-service.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css'],
})
export class UpdateDataComponent implements OnInit {
  formPostData: any;
  public test1: any;
  constructor(
    private mySer2: CurdAllServiceService,
    private route3: Router,
    private fb3: FormBuilder
  ) {
    this.mySer2.message().subscribe((res) => {
      this.test1 = res;
    });
  }

  ngOnInit(): void {
    this.formPostData = this.fb3.group({
      name: [this.test1.name],
      age: [this.test1.age],
      empId: [this.test1.empId],
      branch: [this.test1.branch],
      role: [this.test1.role],
      // 'id': new FormControl(null),
      // 'name': new FormControl(null),
      // 'mName': new FormControl(null),
      // 'lName': new FormControl(null),
      // 'bDate': new FormControl(null),
      // 'gender': new FormControl(null)
    });
  }

  onUpdateClick() {
    this.mySer2
      .editDataBackend(this.test1.id, this.formPostData.value)
      .subscribe((res) => {});
    this.route3.navigate(['/tData']);
  }
}
