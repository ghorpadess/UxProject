import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  RequiredValidator,
} from '@angular/forms';

import { DesignUtilityService } from '../Service/design-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  asd: any = [];
  login: boolean = false;
  loginForm: any;
  errorMessage: any;

  constructor(private router: Router, private mySer: DesignUtilityService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
    localStorage.setItem('email', '123');
    localStorage.setItem('password', '123');
  }

  onClick() {
    if (
      localStorage.getItem('email') === this.loginForm.value.email &&
      localStorage.getItem('password') === this.loginForm.value.password
    ) {
      this.router.navigate(['/home']);
      this.mySer.isHeader.next(true);
    } else {
      this.errorMessage = `Please enter Valid email and password`;
    }
  }
}
