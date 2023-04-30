import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentComponent} from './student/student.component';
import {FormsModule, NgModel} from "@angular/forms";
import {ComputeagePipe} from './computeage.pipe';
import {CountrycodePipe} from './countrycode.pipe';
import {RegisterComponent} from './register/register.component';
import {SalutationPipe} from './salutation.pipe';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeformComponent} from './employeeform/employeeform.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ComputeagePipe,
    SalutationPipe,
    CountrycodePipe,
    RegisterComponent,
    SalutationPipe,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeformComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
