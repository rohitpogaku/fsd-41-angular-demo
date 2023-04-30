import {Component, OnInit} from '@angular/core';
import {StudentserviceService} from "../studentservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any;
  departments: any;
  employee: any | undefined;

  constructor(private studentService: StudentserviceService, private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees("employees");
    // this.getDepartments("departments");
  }

  getDepartments(path: string) {
    return this.studentService
      .getEmployeesData(path)
      .subscribe((d: any) => {
        this.departments = d;
        console.log(d);
      });
  }

  getEmployees(path: string) {
    return this.studentService
      .getEmployeesData(path)
      .subscribe((e: any) => {
        this.employees = e;
        console.log(e);
      });
  }

  deleteEmployee(id: any) {
    return this.studentService.deleteEmployee(id).subscribe((e: any) => {
      this.ngOnInit();
    });
  }

  editEmployee(e: any) {
    // this.router.navigateByUrl(`/update/${id}`);
    this.employee = e;
  }

  updateEmployee() {
    this.studentService.updateEmployee(this.employee).subscribe((e: any) => {
      this.ngOnInit();
      this.employee = null;
    })
  }
}
