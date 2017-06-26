/**
 * Created by admin on 31/05/2017.
 */
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Media} from "../models/Media";
import {EventResponseObject} from "../models/EventResponseObject";
import {Event} from "../models/Event";


@Injectable()
export class EventService {

  private static EVENTSPATH: string='http://192.168.33.181:8080/events';
  headers: Headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "8080", 'Authorization': localStorage.getItem('token') });
  options: RequestOptions = new RequestOptions({ headers: this.headers });
  events: Event[];
  eventResponseOBjet: EventResponseObject;
  constructor(private http: Http) {
  }


  getEvents(): Observable<Event[]>{
    return this.http.get(EventService.EVENTSPATH+"/events", { headers: this.headers } ).map(response=>{
        this.events=<Event[]>response.json()._embedded.events;
        return this.events;});
  }

  addEvent(event: Event){
      return this.http.post(EventService.EVENTSPATH, JSON.stringify(event), this.options).map(response => <Event>response.json());
  }

  getEvent(eventId: number): Observable<Event>{
    return this.http.get(EventService.EVENTSPATH+"/events/"+eventId+"?projection=eventProjection", this.options).map(response => <Event>response.json());
  }

  editEvent(event: Event){
    return this.http.put(EventService.EVENTSPATH+"/"+event.id, JSON.stringify(event), this.options).map(response => <Event>response.json());
  }

}
