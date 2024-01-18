import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/Service/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit{
  showInv: any;
  
  constructor(private invSer: InventoryService) { }
  ngOnInit(): void {
    this.invSer.getAllInv().subscribe((res: any) => {
      console.log(res.data);
      this.showInv = res.data
    })
  }
}
