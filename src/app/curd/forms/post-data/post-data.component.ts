import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { CurdAllServiceService } from '../curd-all-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
  formPostData: any;
  constructor(
    private mySer1: CurdAllServiceService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formPostData = this.fb.group({
      name: [''],
      age: [''],
      empId: [''],
      branch: [''],
      role: [''],
      // 'id': new FormControl(null),
      // 'name': new FormControl(null),
      // 'mName': new FormControl(null),
      // 'lName': new FormControl(null),
      // 'bDate': new FormControl(null),
      // 'gender': new FormControl(null)
    });
  }

  onClick() {
    this.mySer1
      .postDataBackend(this.formPostData.value)
      .subscribe((data) => {});
    this.route.navigate(['/tData']);
  }
}
