import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
  prod_id: any
  showDetails:any
  baseUrl: string = "http://localhost:2100/"

  constructor(private prodSer: ProductService,
    private active: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.active.paramMap.subscribe((params) => {
      this.prod_id = params.get('id')
      // console.log(this.prod_id);
      this.prodSer.getsingle_Product(this.prod_id).subscribe((res: any) => {
        console.log(res.data);
        this.showDetails=res.data
      })
    })

  }
}
