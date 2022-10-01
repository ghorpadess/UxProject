import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CApiService {

  constructor(private http: HttpClient) { }

  postEmploy(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data)
      .pipe(map((res) => {
        return res;
      }));
  };

  getEmploy() {
    return this.http.get('http://localhost:3000/posts')
      .pipe(map((res) => {
        return res;
      }))
  }

  updateMember(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/posts/' + id, data)
      .pipe(map((res: any) => {
        return res
      }))
  }

  deletMember(id: number) {
    return this.http.delete<any>('http://localhost:3000/posts/' + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
