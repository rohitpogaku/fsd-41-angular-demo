import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {StudentComponent} from "./student/student.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth.guard";
import {EmployeeComponent} from "./employee/employee.component";
import {EmployeeformComponent} from "./employeeform/employeeform.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "student", canActivate: [AuthGuard], component: StudentComponent},
  {path: "employee", component: EmployeeComponent},
  {path: "addemployee", component: EmployeeformComponent},
  {path: "update/:id", component: UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
