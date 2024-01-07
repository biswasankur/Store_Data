import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storeapi:string="http://localhost:2100/add-store"
  getstoreapi:string="http://localhost:2100/get-store"


  registation_api: string = "http://localhost:2100/signUp";
  login_api: string = "http://localhost:2100/signIn";

  single_api:string="http://localhost:2100/single"
  
   constructor(private http:HttpClient) { }

   register(formdata: any): Observable<any> {
    return this.http.post<any>(this.registation_api, formdata)
  }

  loginUser(loginData: any): Observable<any> {
    return this.http.post<any>(this.login_api, loginData)
    // .pipe(catchError(this.errorHandler))
  }

  //error Handler
  // errorHandler(error: HttpErrorResponse) {
  //   return throwError(() => error || "Server Error")
  // }

 
   addStore(formData:any):Observable<any>{
     return this.http.post<any>(this.storeapi, formData)
   }
   getStore():Observable<any>{
     return this.http.get<any>(this.getstoreapi)
   }


   single_data_fetch(id: any): Observable<any> {
    return this.http.get<any>(`${this.single_api}/${id}`)
  }
}
