import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  constructor(private http: HttpClient) { }

  onSaveProductData(data: any) {
    return this.http.put('https://add-products-dfd84-default-rtdb.firebaseio.com/product.json', data);
  }

  onGetData() {
    return this.http.get('https://add-products-dfd84-default-rtdb.firebaseio.com/product.json')
  }
}
