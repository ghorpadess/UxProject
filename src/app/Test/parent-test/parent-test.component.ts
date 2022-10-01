import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-test',
  templateUrl: './parent-test.component.html',
  styleUrls: ['./parent-test.component.css'],
})
export class ParentTestComponent implements OnInit {
  createdUser: any;
  allAdminList: any;
  constructor() {}

  ngOnInit(): void {}

  usersFormChild(cliduser: any) {
    this.createdUser = cliduser;
  }

  onClickRemove(index: any) {
    this.createdUser.splice(index, 1);
  }

  adminsFromChild(admin: any) {
    this.allAdminList = admin;
  }

  onRemoveAdmin(adminIndex: any) {
    this.allAdminList.splice(adminIndex, 1);
  }

  removeAllAdmins() {
    this.allAdminList.splice(this.allAdminList.lenght - 1);
    // this.createdUser.splice(this.createdUser.lenght - 1)
  }
}
