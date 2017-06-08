/**
 * Created by admin on 08/06/2017.
 */
import {Injectable} from "@angular/core";
import {RequestOptions, Headers, Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ImageService{
  private static EVENTSPATH: string='http://localhost:8080/events';
  headers: Headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "8080", 'Authorization': localStorage.getItem('token') });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
  }

  getImage(url:string): Observable<string>{
    return this.http.get(url, this.options).map(response=> {return <string>response.json().contentUrl;});

  }

}
