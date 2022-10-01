import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { CurdAllServiceService } from '../curd-all-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabel-data',
  templateUrl: './tabel-data.component.html',
  styleUrls: ['./tabel-data.component.css']
})
export class TabelDataComponent implements OnInit {
  public tableData: any;
  formPostData: any
  deleteData: any;

  constructor(private mySer: CurdAllServiceService, private fb2: FormBuilder,
    private router1: Router) {
    this.getData();
  }

  ngOnInit(): void {
    this.formPostData = this.fb2.group({
      name: [''],
      age: [''],
      empId: [''],
      branch: [''],
      role: ['']
      // 'id': new FormControl(null),
      // 'name': new FormControl(null),
      // 'mName': new FormControl(null),
      // 'lName': new FormControl(null),
      // 'bDate': new FormControl(null),
      // 'gender': new FormControl(null)
    })
  }

  getData() {
    this.mySer.getAllDataBackend().subscribe(data => {
      console.log(data);
      this.tableData = data
    })
  }

  onAddMember() {
    this.router1.navigate(['/pData']);
  }

  onEdit(id: any, data: any) {
    this.mySer.getMessage(id, data)
    console.log(this.mySer.getMessage(id, data))
    this.router1.navigate(['/uData']);
  }

  onDelete(dt: any) {
    this.mySer.deleteDataBackend(dt.id).subscribe(res => {
      this.mySer.getAllDataBackend().subscribe(data => {
        console.log(data);
        this.deleteData = data
        if (this.deleteData.length > 0) {
          this.getData();
        }
      })
    })
  }

}
