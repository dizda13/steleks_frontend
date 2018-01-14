/**
 * Created by admin on 06/06/2017.
 */
import {Component} from "@angular/core";
import {RegistrationService} from "../../services/registration.service";
import { User } from "./user.model";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'registration',
  templateUrl: 'registration.component.html'
})

export class RegistrationComponent {

  user: User = new User("","","","","","");

  constructor(private registrationService: RegistrationService,
              private loginService: LoginService,
              private router: Router){

  }

  login(){
    this.registrationService.register(this.user).subscribe(data => {
      this.loginService.loginUser(this.user).subscribe(data => {
        this.router.navigate(['/home']);
      });
    });
  }
}
