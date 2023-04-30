import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StudentserviceService} from "./studentservice.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  studentService: StudentserviceService;

  constructor(studentService: StudentserviceService) {
    this.studentService = studentService;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.studentService.studentLoggedIn;
  }

}
