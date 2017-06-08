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

  private static EVENTSPATH: string='http://localhost:8080/events';
  headers: Headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "8080", 'Authorization': localStorage.getItem('token') });
  options: RequestOptions = new RequestOptions({ headers: this.headers });
  events: Event[];
  constructor(private http: Http) {
  }


  getEvents(): Observable<Event[]>{
    console.log(this.headers);
    return this.http.get(EventService.EVENTSPATH+"/events", { headers: this.headers } ).map(response=>{
      this.events=<Event[]>response.json()._embedded.events;
      this.events[0].mediaSet=response.json()._embedded.events[0]._links.mediaSet.href;
      return this.events});
  }

  addEvent(event: Event){
      return this.http.post(EventService.EVENTSPATH, JSON.stringify(event), this.options).map(response => <Event>response.json());
  }

  getEvent(event: Event){
    return this.http.get(EventService.EVENTSPATH+"/"+event.id, this.options).map(response => <Event>response.json());
  }

  editEvent(event: Event){
    return this.http.put(EventService.EVENTSPATH+"/"+event.id, JSON.stringify(event), this.options).map(response => <Event>response.json());
  }

}
