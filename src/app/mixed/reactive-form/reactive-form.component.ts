import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  myReactiveForm: any;
  constructor() {}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      userDetails: new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      password: new FormControl(null, Validators.required),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm.value);
    // this.myReactiveForm.reset();
  }

  onAddSkills() {
    this.myReactiveForm
      .get('skills')
      .push(new FormControl(null, Validators.required));
  }
}
