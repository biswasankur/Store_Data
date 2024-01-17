import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreAddComponent } from './Components/store-add/store-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './Service/store.service';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ECommersComponent } from './components/e-commers/e-commers.component';
import { DetailsComponent } from './components/details/details.component';
import { PaymentdetailsComponent } from './components/paymentdetails/paymentdetails.component';
import { KYCComponent } from './components/kyc/kyc.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { InvDetailsComponent } from './Components/Inventory/inv-details/inv-details.component';
import { EditComponent } from './Components/edit/edit.component';
import { ProductComponent } from './Components/product/product.component';
import { ProdDetailsComponent } from './Components/product/prod-details/prod-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreAddComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ECommersComponent,
    DetailsComponent,
    PaymentdetailsComponent,
    KYCComponent,
    InventoryComponent,
    InvDetailsComponent,
    EditComponent,
    ProductComponent,
    ProdDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
