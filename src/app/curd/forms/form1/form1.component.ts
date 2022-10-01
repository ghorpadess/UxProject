import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component implements OnInit, OnDestroy {
  genralInfoForm: any;
  formValues: any = [];

  public universitys: any[] = [
    'Pune University',
    'Shivaji University',
    'Mumbai University',
    'Solapur University',
  ];

  public educations: any[] = ['SSC', 'HSC', 'Diploma', 'BE IT', 'MBA'];
  studentForm: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.genralInfoForm = new FormGroup({
      name: new FormControl(null),
      lname: new FormControl(null),
      age: new FormControl(null),
      education: new FormControl(null),
      university: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      info: new FormControl(null),
    });

    this.onFormSubmit();
  }

  onSubmit() {
    this.formValues.push({
      name: this.genralInfoForm.value.name,
      lname: this.genralInfoForm.value.lname,
      education: this.genralInfoForm.value.education,
      age: this.genralInfoForm.value.age,
      email: this.genralInfoForm.value.email,
    });
  }

  onFormSubmit() {
    let jobData: any = this.activatedRoute.snapshot.queryParams;
    this.studentForm = jobData.isStudent;
    // console.log(JSON.parse(this.activatedRoute.snapshot.queryParams['studentDetails']));

    this.genralInfoForm
      .patchValue
      // JSON.parse(this.activatedRoute.snapshot.queryParams['studentDetails'])
      ();
  }
  onReset() {
    this.genralInfoForm.reset();
  }

  ngOnDestroy(): void {
    this.genralInfoForm.reset();
  }
}
