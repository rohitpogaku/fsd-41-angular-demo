import {Component} from '@angular/core';
import {StudentserviceService} from "../studentservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent {
  employee: any;

  constructor(private router: Router, private studentService: StudentserviceService) {
  }


  addEmployee(formData: any) {
    // this.employee = formData;
    this.studentService
      .createEmployee(formData)
      .subscribe((e: any) => {

        console.log("Inserted Successfully");
        this.router.navigateByUrl("/employee");
      });
    // console.log(formData);
    // console.log(this.employee);
    // this.router.navigateByUrl("employee");
  }
}
