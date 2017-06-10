/**
 * Created by admin on 08/06/2017.
 */
import {Injectable} from "@angular/core";
import {RequestOptions, Headers, Http} from "@angular/http";
import {Observable} from "rxjs";
import {Media} from "../models/Media";

@Injectable()
export class ImageService{
  private static EVENTSPATH: string='http://localhost:8080/events';
  headers: Headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "8080", 'Authorization': localStorage.getItem('token') });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
  }

  getImage(url:string): Observable<Media[]>{
    console.log(url);
    return this.http.get(url, this.options).map(response=> {return <Media[]>response.json()._embedded.medias;});

  }

}
