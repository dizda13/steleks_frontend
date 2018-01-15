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
      localStorage.getItem('token')
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
        localStorage.getItem('token');
        this.router.navigate([this.redirect]);
      });
  }


  logout() {
    return this.http.delete(LoginService.EVENTSPATH + '/' + localStorage.getItem('token'))
      .subscribe(response => response);
  }
}
