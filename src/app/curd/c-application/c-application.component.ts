import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CApiService } from 'src/app/c-api.service';
import { EmpployeeModel } from './employ-dashboard.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-application',
  templateUrl: './c-application.component.html',
  styleUrls: ['./c-application.component.css']
})
export class CApplicationComponent implements OnInit {

  formvalue !: FormGroup;

  // json-server --watch db.json    ------------- Run json server
  // creat new object method
  employeeModelObj: EmpployeeModel = new EmpployeeModel();
  member !: any;

  constructor(private formbulder: FormBuilder, private api: CApiService, private route: Router) { }

  ngOnInit(): void {
    this.formvalue = this.formbulder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      Salary: ['']
    })
    this.getAllMember()
  }

  postMember() {
    this.employeeModelObj.firstName = this.formvalue.value.firstName;
    this.employeeModelObj.lastName = this.formvalue.value.lastName;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.mobile = this.formvalue.value.mobile;
    this.employeeModelObj.Salary = this.formvalue.value.Salary

    this.api.postEmploy(this.employeeModelObj).subscribe(res => {
      console.log(res)
      alert('Employ added successfully')
      let ref = document.getElementById('cancle')
      ref?.click();
      this.formvalue.reset();
      this.getAllMember()
    },
      err => {
        alert('Something went wrong')
      })
  }

  getAllMember() {
    this.api.getEmploy().subscribe((res: any) => {
      console.log(res);
      this.member = res;
    })
  }

  deleteMembers(dt: any) {
    this.api.deletMember(dt.id).subscribe((res) => {
      // alert('Employ deleted successfully')
      this.getAllMember()
    })
    // if (this.getAllMember.length < 4) {
    //   // this.route.navigate(['hook'])
    // }
  }

  editMember(dt: any) {
    this.employeeModelObj.id = dt.id

    this.formvalue.controls['firstName'].setValue(dt.firstName)
    this.formvalue.controls['lastName'].setValue(dt.lastName)
    this.formvalue.controls['email'].setValue(dt.email)
    this.formvalue.controls['mobile'].setValue(dt.mobile)
    this.formvalue.controls['Salary'].setValue(dt.Salary)
  }
  updateMember() {
    this.employeeModelObj.firstName = this.formvalue.value.firstName;
    this.employeeModelObj.lastName = this.formvalue.value.lastName;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.mobile = this.formvalue.value.mobile;
    this.employeeModelObj.Salary = this.formvalue.value.Salary

    this.api.updateMember(this.employeeModelObj, this.employeeModelObj.id).subscribe((res) => {
      alert('Member updated successfully')
      let ref = document.getElementById('cancle')
      ref?.click();
      this.formvalue.reset();
      this.getAllMember()
    })
  }


}
