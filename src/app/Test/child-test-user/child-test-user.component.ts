import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-test-user',
  templateUrl: './child-test-user.component.html',
  styleUrls: ['./child-test-user.component.css']
})
export class ChildTestUserComponent implements OnInit {
  createdUser: any = []
  @Output() newUserCreated = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.createUser
  }


  createUser(user: any) {
    this.createdUser.push({
      name: user.value
    })
    this.newUserCreated.emit(this.createdUser);
  }



}
