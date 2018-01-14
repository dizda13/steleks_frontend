/**
 * Created by admin on 04/06/2017.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent{

  constructor(private router: Router){

  }

  redirectOnLogin(){
    this.router.navigate(['/login']);
  }

  onRegisterClick(){
    this.router.navigate(['/registration']);
  }
}
