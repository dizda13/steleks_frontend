/**
 * Created by admin on 04/06/2017.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {

  constructor(private router: Router, public loginService: LoginService) {

  }

  redirectOnLogin(){
    this.router.navigate(['/login']);
  }

  onRegisterClick(){
    this.router.navigate(['/registration']);
  }
}
