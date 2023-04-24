import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { ReactiveFormsModule } from '@angular/Forms';
import { EmploginComponent } from './emplogin/emplogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpcreateComponent,
    EmploginComponent,
    RegistrationComponent,
    HomeComponent,
    EmplistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
