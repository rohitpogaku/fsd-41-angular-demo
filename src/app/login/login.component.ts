import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthGuard} from "../auth.guard";
import {StudentserviceService} from "../studentservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private studentService: StudentserviceService) {
  }

  submitForm(formvalues: any): void {
    if (formvalues.id == "1" && formvalues.name == "xyz") {
      this.studentService.studentLoggedIn = true;
      // this.router.navigateByUrl("student");
      this.router.navigateByUrl("employee");
    } else {
      this.router.navigateByUrl("login");
    }
  }
}
