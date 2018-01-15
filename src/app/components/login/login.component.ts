/**
 * Created by admin on 06/06/2017.
 */
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  username: string;
  passowrd: string;

  constructor(private loginService: LoginService) {

  }

  getPass(event: any) {
    this.passowrd = event.target.value
  }

  getUser(event: any) {
    this.username = event.target.value
  }

  login() {
    this.loginService.login(this.username, this.passowrd);
  }
}
