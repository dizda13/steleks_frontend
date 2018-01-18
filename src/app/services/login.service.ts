/**
 * Created by admin on 01/06/2017.
 */

import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../components/registration/user.model';

@Injectable()
export class LoginService {

  private static EVENTSPATH = 'http://localhost:8080/users/accesstoken';
  private redirect: string;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
  }

  loginUser(user: User) {
    return this.http.post(
      LoginService.EVENTSPATH,
      user,
    ).do(response => {
      localStorage.setItem('token', response.json().token);
      localStorage.setItem('userId', response.json().userId);
      localStorage.getItem('token');
      localStorage.setItem('roles', response.json().roles);
    });
  }


  login(username: string, password: string) {
    this.route.queryParams.subscribe(params => {
      this.redirect = params.returnUrl;
    });
    return this.http.post(
      LoginService.EVENTSPATH,
      {'username': username, 'password': password})
      .subscribe(response => {
        localStorage.setItem('token', response.json().token);
        localStorage.setItem('userId', response.json().userId);
        localStorage.setItem('roles', response.json().roles);
        localStorage.getItem('token');
        this.router.navigate([this.redirect ? this.redirect : '/home']);
      });
  }


  logout() {
    return this.http.delete(LoginService.EVENTSPATH + '/' + localStorage.getItem('token'))
      .subscribe(response => {
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          this.router.navigate(['/login']);
          return response;
        }
      )
      ;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin() {
    return localStorage.getItem('roles').indexOf('ADMIN') !== -1;
  }
}
