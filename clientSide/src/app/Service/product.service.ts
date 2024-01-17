import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProductApi: string = "http://localhost:2100/productGet";
  singleProductApi: string = "http://localhost:2100/singleProduct";

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get<any>(this.getProductApi)
  }

  getsingle_Product(id: any): Observable<any> {
    return this.http.get<any>(`${this.singleProductApi}/${id}`)
  }
}
