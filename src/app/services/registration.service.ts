/**
 * Created by admin on 01/06/2017.
 */
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import { User } from "../components/registration/user.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RegistrationService {

  private static EVENTSPATH: string='http://localhost:8080/users/users';
  headers: Headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http){}

  register(user: User) : Observable<any> {
    return this.http.post(RegistrationService.EVENTSPATH, user, this.options);
  }
}
