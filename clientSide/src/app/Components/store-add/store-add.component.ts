import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StoreService } from 'src/app/Service/store.service';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent {
  addStore!: FormGroup;
  checkBoxArr: string[] = [
    'Store on D2C Mode',
    'Store on B2B Mode',
    'app Registation on D2C Mode',
    'app Registation on B2B Mode',
    'store active on app store',
    'last mile delivery flag',
    'D2C Login flag',
    'B2B Login flag',
    'service based contain flag',
    'Also market place'
  ]
  selectedCheck: string[] = [];
  setectedImg!: File;
  constructor(private StoreSer: StoreService) { }

  ngOnInit(): void {
    this.addStore = new FormGroup({
      logo: new FormControl(""),
      checkBox: new FormControl(""),

      // D2C_FLG: new FormControl(""),
      // D2CREGSTRATNFLG: new FormControl(""),
      // D2C_LOGIN_FLG: new FormControl(""),
      // B2B_LOGIN_FLG: new FormControl(""),
      // B2B_FLG: new FormControl(""),
      // B2B_BO_REGSTRATN_FLG: new FormControl(""),
      // LASTMILE_DLVRY_FLG: new FormControl(""),
      // SERVICES_FLG: new FormControl(""),
      // DOC_APP_ALSO_MARKETPLACE_FLG: new FormControl(""),

      company_name: new FormControl(""),
      // check: new FormControl(""),
      tagline1: new FormControl(""),
      tagline2: new FormControl(""),
    })
  }
  selectCheckBox(e: any) {
    if (this.selectedCheck.length > 0) {
      let checkindex = this.selectedCheck.findIndex((x) => x === e.target.value)
      if (checkindex != -1) {
        this.selectedCheck.splice(checkindex, 1);
      } else {
        this.selectedCheck.push(e.target.value)
      }
    } else {
      this.selectedCheck.push(e.target.value);
    }
    console.log(this.selectedCheck);
  }

  onFileSelection(event: any) {
    this.setectedImg = event.target.files[0];
    console.log("image:", this.setectedImg);

  }


  sumbitData() {
    // alert("Submitted Successfully")
    console.log("Forms Data:", this.addStore.value);
    const formData: FormData = new FormData()
    formData.append('company_name', this.addStore.value.company_name)
    formData.append('tagline1', this.addStore.value.tagline1)
    formData.append('tagline2', this.addStore.value.tagline2)
    formData.append('checkBox', this.addStore.value.checkBox)
    
    formData.append('logo', this.setectedImg, this.setectedImg.name)

    this.StoreSer.addStore(formData).subscribe((res: any) => {
      console.log("post data:", res.data);
      alert("data successfully");
    })

  }
}