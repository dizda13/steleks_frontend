import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../models/Event'
import { EventService } from '../../services/event.service'

@Component({
  selector: 'add-events',
  templateUrl: './add-event.component.html',
})

export class AddEventComponent {

  event: Event;

  constructor(private router: Router, private eventService: EventService) {
    this.event = new Event();
    this.event.createdById = Number.parseInt(localStorage.getItem('userId'));
  }

  setTitle(event: any) {
    this.event.title = event.target.value
  }

  setShortText(event: any) {
    this.event.shortText = event.target.value
  }

  setLongText(event: any) {
    this.event.longText = event.target.value
  }

  setDuration(event: any) {
    this.event.duration = Number.parseInt(event.target.value)
  }

  addEvent() {
    this.eventService.addEvent(this.event).subscribe();
  }

}
