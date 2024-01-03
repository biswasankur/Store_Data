import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/Service/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginInputValue!: FormGroup;
  errorMsg!: string;
  changetype: boolean = true;
  visible: boolean = true;
  constructor(private UserSer: StoreService, 
    private route: Router,

  ) { }
  ngOnInit(): void {
    this.loginInputValue = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("([a-z0-9.-]+)@([a-z]{2,15}).([a-z.]{2,10})$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$")])
    })
  }

  view() {
    this.changetype = !this.changetype;
    this.visible = !this.visible;
  }

  submitData() {
    // console.log("login Form Data:", this.loginInputValue.value);

    this.UserSer.loginUser(this.loginInputValue.value).subscribe((res: any) => {
      console.log("Responce after Login:", res.user);
      if (res.status == 200) {
        // alert("Login Successfully")
        // this.storage.setData(res.user.name,
        //   res.user.email,
        //   res.user._id,
        //   res.token)
        alert(res.msg)
        this.route.navigate(['/e_commers'])
      } else {
        // alert("Login Error");
        alert(res.message);
      }
    }, (err) => {
      console.log("http error :", err.error.message);
      this.errorMsg = err.error.message


    }
    )
  }
}
