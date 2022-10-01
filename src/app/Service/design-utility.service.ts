import { BehaviorSubject, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  userName: string = 'Swapnil';

  constructor(private http: HttpClient) {}

  grtProduct() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // angular subject
  updatedProduct = new Subject<string>();

  // BehaviorSubject
  updateUser = new BehaviorSubject(this.userName);

  // To hide and show navbar
  isHeader = new Subject();
}
