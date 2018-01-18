import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { User } from '../models/User';
import {ROLES} from './ROLES';

@Injectable()
class UserService {
  private static USERSPATH = 'https://192.168.56.101:8443/users';

  options = new RequestOptions();

  constructor(private http: Http) {
    this.options.headers = new Headers();
    this.options.headers.set('Content-Type', 'text/uri-list');
  }

  getUsers(): Observable<User[]> {
    return this.http.get(UserService.USERSPATH + '/users').map( response => <User[]>response.json()._embedded.users)
  }

  setUserRole(id: string){
    return this.http.post( UserService.USERSPATH + '/users/' + id + '/userRoles', ROLES.ADMIN, this.options)
  }

  removeRole(id: string) {
    return this.http.put( UserService.USERSPATH + '/users/' + id + '/userRoles', ROLES.USER, this.options)
  }
}

export { UserService }
