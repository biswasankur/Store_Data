import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/Service/store.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registaionInputValue!: FormGroup;
  setectedImg!: File;
  changeType: boolean = true;
  visiable: boolean = true;
  constructor(private UserSer: StoreService,
    private route: Router,
  ) { }
  ngOnInit(): void {
    this.registaionInputValue = new FormGroup({
      // name: new FormControl(''),
      // email: new FormControl(''),
      // contact: new FormControl(''),
      // password: new FormControl(''),

      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]),
      email: new FormControl('', [Validators.required, Validators.pattern("([a-z0-9.-]+)@([a-z]{2,15}).([a-z.]{2,10})$")]),
      contact: new FormControl('', [Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$")]),
    });
  }

  view() {
    this.changeType = !this.changeType;
    this.visiable = !this.visiable
  }

  onFileSelection(event: any) {
    this.setectedImg = event.target.files[0];
    console.log("image:", this.setectedImg);

  }
  onSubmit() {
    console.log("Form value Recived:", this.registaionInputValue.value);

    const formData: FormData = new FormData()
    formData.append('name', this.registaionInputValue.value.name)
    formData.append('email', this.registaionInputValue.value.email)
    formData.append('contact', this.registaionInputValue.value.contact)
    formData.append('password', this.registaionInputValue.value.password)
    formData.append('image', this.setectedImg, this.setectedImg.name)

    this.UserSer.register(formData).subscribe((res: any) => {
      console.log("Responce after post:", res);
      if (res.status == 200) {
        alert(res.message);
        this.route.navigate(['/login'])
      } else {
        alert(res.msg)
            }
    })
  }

}
