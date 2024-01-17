import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from 'src/app/Service/inventory.service';

@Component({
  selector: 'app-inv-details',
  templateUrl: './inv-details.component.html',
  styleUrls: ['./inv-details.component.css']
})
export class InvDetailsComponent implements OnInit {

  showInv: any;
  details_id: any;
  constructor(private invSer: InventoryService, private Activate: ActivatedRoute) { }
  ngOnInit(): void {
    this.Activate.paramMap.subscribe((params) => {
      this.details_id = params.get('id')
      console.log(this.details_id);

      this.invSer.getsingle(this.details_id).subscribe((res: any) => {
        console.log("sing:",res.data);
        this.showInv = res.data
      })
    })
  }
}
