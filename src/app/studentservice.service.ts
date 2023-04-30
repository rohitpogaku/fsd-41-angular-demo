import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  private _studentLoggedIn: boolean;


  constructor(private httpClient: HttpClient) {
    this._studentLoggedIn = false;
  }

  set studentLoggedIn(value: boolean) {
    this._studentLoggedIn = value;
  }

  get studentLoggedIn(): boolean {
    return this._studentLoggedIn;
  }

  getCountriesData() {
    return this.httpClient.get("https://restcountries.com/v2/all");
  }

  getEmployeesData(path: string) {
    return this.httpClient.get(`/${path}`);
  }

  getEmployeeById(id: any) {
    return this.httpClient.get(`/employees/${id}`);
  }

  createEmployee(data: any) {
    return this.httpClient.post("/employees", data);
  }

  deleteEmployee(id: any) {
    return this.httpClient.delete(`/employees/${id}`);
  }

  updateEmployee(data: any) {
    return this.httpClient.put("/employees", data);
  }


}
