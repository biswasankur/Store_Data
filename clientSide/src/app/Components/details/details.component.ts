import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/Service/store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  single_id: any
  constructor(private store: StoreService,
    private actived: ActivatedRoute) { }
  ngOnInit(): void {
    this.actived.paramMap.subscribe((params) => {
      this.single_id = params.get('id')
      this.store.single_data_fetch(this.single_id).subscribe((value:any)=>{
        console.log("Single Data", value.data);
      })
    })
  }

}
