import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: any[];
  formInput: any;

  constructor() {
    this.student = [
      {
        "id": 1,
        "name": "Jay",
        "dob": "12-04-2000",
        "age": 15,
        "gender": "M",
        "marks": 80,
        "email": "jay@mail.com",
        "country": "india",
        "phone": 9870450323
      },
      {
        "id": 2,
        "name": "Sally",
        "dob": "08-22-2001",
        "age": 19,
        "gender": "F",
        "marks": 76,
        "email": "sally@mail.com",
        "country": "usa",
        "phone": 7983029128,
      },
      {
        "id": 3,
        "name": "Ram",
        "dob": "04-02-2000",
        "age": 22,
        "gender": "M",
        "marks": 55,
        "email": "ram@mail.com",
        "country": "india",
        "phone": 9989067899
      },
      {
        "id": 4,
        "name": "Vinay",
        "dob": "12-08-1998",
        "age": 20,
        "gender": "M",
        "marks": 93,
        "email": "vinay@mail.com",
        "country": "india",
        "phone": 8879092345
      },
      {
        "id": 5,
        "name": "Julie",
        "dob": "03-10-1999",
        "age": 23,
        "gender": "F",
        "marks": 87,
        "email": "julie@mail.com",
        "country": "usa",
        "phone": 9059872345
      },
      this.formInput = {
        "id": "xx",
        "name": "xxxxx",
        "dob": "xx-xx-xxxx",
        "age": "xx",
        "gender": "x",
        "marks": "xx",
        "email": "xxxxx@xxxx.xxx",
        "country": "xxx",
        "phone": "xxxxxxxxxx"
      }
    ]
  }

  ngOnInit(): void {
    // this.student.push(this.formInput);
  }


}
