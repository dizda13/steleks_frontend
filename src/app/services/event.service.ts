/**
 * Created by admin on 31/05/2017.
 */
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Media} from '../models/Media';
import {EventResponseObject} from '../models/EventResponseObject';
import {Event} from '../models/Event';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventService {

  private static EVENTSPATH = 'http://localhost:8080/events';
  events: Event[];
  eventResponseObject: EventResponseObject;

  constructor(private http: Http) {
  }

  getEvents(): Observable<Event[]> {
    return this.http.get(EventService.EVENTSPATH + '/events').map(response => {
        this.events = <Event[]>response.json()._embedded.events;
        return this.events;
    });
  }

  addEvent(event: Event) {
    return this.http.post(EventService.EVENTSPATH + '/events', JSON.stringify(event)).map(response => <Event>response.json());
  }

  getEvent(eventId: number): Observable<Event> {
    return this.http.get(EventService.EVENTSPATH + '/events/' + eventId + '?projection=eventProjection')
      .map(response => <Event>response.json());
  }

  editEvent(event: Event) {
    return this.http.put(EventService.EVENTSPATH + '/' + event.id, JSON.stringify(event)).map(response => <Event>response.json());
  }

}
