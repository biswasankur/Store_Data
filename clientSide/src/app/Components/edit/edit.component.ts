import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/Service/inventory.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editData!: FormGroup;
  eid: any
  userDetails: any
  constructor(private invSer: InventoryService,
     private actived: ActivatedRoute,
     private router:Router){ }
     
  ngOnInit(): void {
    this.editData = new FormGroup({
      exch_inv_id: new FormControl(''),
      exch_inv_Name: new FormControl(''),
      exch_inv_TypeName: new FormControl(''),
      exch_Type_Name: new FormControl(''),
      exch_Adunit_Name: new FormControl(''),
      fee: new FormControl(''),
      active_flag: new FormControl(''),
    })
    this.actived.paramMap.subscribe((params) => {
      this.eid = params.get('id')
      console.log("Collected id:", this.eid);

      this.invSer.editData(this.eid).subscribe((res: any) => {
        console.log("editData collected:", res.data);
        this.userDetails = res.data

        this.editData = new FormGroup({
          exch_inv_id: new FormControl(this.userDetails.exch_inv_id),
          exch_inv_Name: new FormControl(this.userDetails.exch_inv_Name),
          exch_Type_Name: new FormControl(this.userDetails.exch_inv_TypeName),
          exch_inv_TypeName: new FormControl(this.userDetails.exch_Type_Name),
          exch_Adunit_Name: new FormControl(this.userDetails.exch_Adunit_Name),
          fee: new FormControl(this.userDetails.fee),
          active_flag: new FormControl(this.userDetails.active_flag),
        })
      })
    })
  }

  submitData() {
 // alert("Updated Successfully")
    console.log(" Fetch Update Forms Data:", this.editData.value);

    this.invSer.updatedata(this.eid, this.editData.value).subscribe((res: any) => {
      console.log("User Successfully Update:", res.data);
      alert("User Successfully Update");
      if (res.data) {
        this.router.navigateByUrl('/inventory')
      }
    })
  }
}
