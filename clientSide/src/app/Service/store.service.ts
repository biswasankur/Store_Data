import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storeapi:string="http://localhost:2100/add-store"
  getstoreapi:string="http://localhost:2100/get-store"

  
   constructor(private http:HttpClient) { }
 
   addStore(formData:any):Observable<any>{
     return this.http.post<any>(this.storeapi, formData)
   }
   getStore():Observable<any>{
     return this.http.get<any>(this.getstoreapi)
   }
}
