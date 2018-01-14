/**
 * Created by admin on 01/06/2017.
 */
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import { User } from "../components/registration/user.model";

@Injectable()
export class LoginService{

  private static EVENTSPATH: string='http://localhost:8080/users/accesstoken';
  headers: Headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http){}

  loginUser(user: User) {
    return this.http.post(LoginService.EVENTSPATH, user, this.options).do(response=>{localStorage.setItem('token', response.json().token); localStorage.getItem('token')});
  }

  login(username: string, password: string){
    return this.http.post(LoginService.EVENTSPATH, {'username':username, 'password': password} , this.options).subscribe(response=>{localStorage.setItem('token', response.json().token); localStorage.getItem('token')});
  }

  logout(){
    return this.http.delete(LoginService.EVENTSPATH+"/"+localStorage.getItem('token'), this.options).subscribe(response=>response);
  }
}
