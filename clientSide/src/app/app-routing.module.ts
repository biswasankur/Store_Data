import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreAddComponent } from './Components/store-add/store-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ECommersComponent } from './components/e-commers/e-commers.component';

const routes: Routes = [
  // {path:"", redirectTo:"add-store", pathMatch:"full"},
  {path:"add-store", component:StoreAddComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"e_commers",component:ECommersComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
