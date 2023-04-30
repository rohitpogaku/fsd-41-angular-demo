import {Component, OnInit} from '@angular/core';
import {StudentserviceService} from "../studentservice.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formInput: any;
  countries: any;

  constructor(private studentService: StudentserviceService) {
    this.formInput = {
      "id": "",
      "name": "",
      "dob": "00-00-0000",
      "age": "",
      "gender": "",
      "marks": "",
      "email": "",
      "country": "",
      "phone": ""
    };
  }

  printFormValues(): void {
    console.log(this.formInput)
  }

  submitForm(formvalues: any): void {
    if (formvalues.id == "1" && formvalues.name == "xyz") {
      alert("Welcome to student")
    } else {
      alert("Invalid Credentials")
    }
  }

  getCountriesList() {
    return this.studentService.getCountriesData().subscribe(
      (countries: any) => {
        this.countries = countries;
      })
  }

  ngOnInit(): void {
    this.getCountriesList();
  }
}
