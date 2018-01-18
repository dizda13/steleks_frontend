import {Component} from '@angular/core';
import construct = Reflect.construct;
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.html'
})
class UserListComponent {

  users: User[];

  constructor(private userService: UserService, public loginService: LoginService) {
    this.userService.getUsers().subscribe(users => this.users = users ? users : []);
  }

  test(event: any, id: string) {
    if (event.target.checked) {
      this.userService.setUserRole(id).subscribe();
    } else {
      this.userService.removeRole(id).subscribe();
    }
  }
}

export { UserListComponent }
