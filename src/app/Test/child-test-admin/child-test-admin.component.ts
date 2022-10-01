import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-test-admin',
  templateUrl: './child-test-admin.component.html',
  styleUrls: ['./child-test-admin.component.css']
})
export class ChildTestAdminComponent implements OnInit {

  @Output() allAdmins = new EventEmitter();
  public createdAdmin: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  public onCreateAdmin(admin: any) {
    this.createdAdmin.push({
      name: admin.value
    })
    this.allAdmins.emit(this.createdAdmin);
  }
}
