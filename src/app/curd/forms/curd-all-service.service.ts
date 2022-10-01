import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurdAllServiceService {
  public id = new BehaviorSubject('1');
  public data = new BehaviorSubject('');
  abc = this.id.asObservable();
  xyz = this.data.asObservable();

  constructor(private http: HttpClient) { }

  message() {
    return this.abc, this.xyz;
  };

  getMessage(id: any, data: any) {
    this.id.next(id);
    this.data.next(data);
  }

  getAllDataBackend() {
    return this.http.get('http://localhost:3000/api/getAllCourses')
  }

  postDataBackend(data: any) {
    return this.http.post('http://localhost:3000/api/insertCourses/', data)
  }

  editDataBackend(id: any, data: any) {
    return this.http.put('http://localhost:3000/api/updateCourses/' + id, data)
  }

  deleteDataBackend(id: any) {
    return this.http.delete('http://localhost:3000/api/deleteCourses/' + id)
  }
}
