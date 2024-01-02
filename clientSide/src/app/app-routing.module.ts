import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreAddComponent } from './Components/store-add/store-add.component';

const routes: Routes = [
  {path:"", redirectTo:"add-store", pathMatch:"full"},
  {path:"add-store", component:StoreAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
