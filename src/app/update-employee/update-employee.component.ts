import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentserviceService} from "../studentservice.service";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: any | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentserviceService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getEmployeeById(id).subscribe((e: any) => {
      this.employee = e;
      console.log(this.employee);
    });
  }

  updateEmployee() {
    this.studentService.updateEmployee(this.employee).subscribe((e: any) => {
      console.log(e);
      this.router.navigateByUrl("/employee");
    })
  }


}
