/**
 * Created by admin on 31/05/2017.
 */
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import { Observable } from "rxjs";
import { Event } from "../models/Event";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class EventService {

  constructor(private http: Http) { }

  private static EVENTSPATH: string='http://localhost:9020/events';
  headers: Headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
  options: RequestOptions = new RequestOptions({ headers: this.headers });


  getEvents(): Observable<Event[]>{
    return this.http.get(EventService.EVENTSPATH).map(response=><Event[]>response.json()._embedded.events);
  }

  addEvent(event: Event){
      return this.http.post(EventService.EVENTSPATH, JSON.stringify(event), this.options).map(response => <Event>response.json());
  }

  getEvent(event: Event){
    return this.http.get(EventService.EVENTSPATH+"/"+event.id).map(response => <Event>response.json());
  }

  editEvent(event: Event){
    return this.http.put(EventService.EVENTSPATH+"/"+event.id, JSON.stringify(event), this.options).map(response => <Event>response.json());
  }

}
