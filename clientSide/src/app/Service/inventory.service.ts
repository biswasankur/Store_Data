import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  getInvApi: string = "http://localhost:2100/getinv";
  getsingleApi: string = "http://localhost:2100/singles";
  editApi: string = "http://localhost:2100/edit";
  updateApi: string = "http://localhost:2100/updateUser";

  constructor(private http: HttpClient) { }

  // Get all inventory items.
  getAllInv(): Observable<any> {
    return this.http.get<any>(this.getInvApi)
  }
  getsingle(id:any): Observable<any> {
    return this.http.get<any>(`${this.getsingleApi}/${id}`)
  }

  editData(id: any): Observable<any> {
    return this.http.get<any>(`${this.editApi}/${id}`)
  }

  updatedata(id: any, formdata: any): Observable<any> {
    return this.http.put<any>(`${this.updateApi}/${id}`, formdata)
  }
}
