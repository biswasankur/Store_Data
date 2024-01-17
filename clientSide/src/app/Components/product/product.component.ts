import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  showProduct:any
  baseUrl: string = "http://localhost:2100/"

constructor(private prodSer:ProductService){}
ngOnInit(): void {
  this.prodSer.getProduct().subscribe((res:any)=>{
    console.log(res.data);
    this.showProduct=res.data
  })
}
}