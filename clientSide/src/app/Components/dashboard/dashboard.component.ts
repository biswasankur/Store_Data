import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/Service/store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

AllData:any
img_path: any = "";
  baseUrl: string = "http://localhost:2100/"
  // folderPath: string="uploads/"

constructor( private store:StoreService){}
  ngOnInit(): void {
    this.store.getStore().subscribe((res:any)=>{
      console.log(res.data,"AllData");
      this.AllData=res.data
      this.img_path= this.baseUrl 
      console.log(this.img_path);
      

      
    })
  }




}
