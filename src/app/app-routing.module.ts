import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"register",component:RegistrationComponent},
  {path:"employee/add",component:EmpcreateComponent},
  {path:"",component:EmploginComponent},
  {path:"index",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
