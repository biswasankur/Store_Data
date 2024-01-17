import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreAddComponent } from './Components/store-add/store-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ECommersComponent } from './components/e-commers/e-commers.component';
import { DetailsComponent } from './components/details/details.component';
import { authGuardGuard } from './Authentication/auth-guard.guard';
import { PaymentdetailsComponent } from './components/paymentdetails/paymentdetails.component';
import { KYCComponent } from './components/kyc/kyc.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { InvDetailsComponent } from './Components/Inventory/inv-details/inv-details.component';
import { EditComponent } from './Components/edit/edit.component';
import { ProductComponent } from './Components/product/product.component';
import { ProdDetailsComponent } from './Components/product/prod-details/prod-details.component';

const routes: Routes = [
  // {path:"", redirectTo:"add-store", pathMatch:"full"},
  { path: "add-store", component: StoreAddComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "e_commers", component: ECommersComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "payment", component: PaymentdetailsComponent },
  { path: "kyc", component: KYCComponent },

  {
    path: "inventory", component: InventoryComponent, children: [
      { path: "details/:id", component: InvDetailsComponent }
    ]
  },
  { path: "edit/:id", component: EditComponent },
  { path: "product", component: ProductComponent },
  { path: "detail/:id", component: ProdDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
