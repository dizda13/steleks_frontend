/**
 * Created by admin on 06/06/2017.
 */

import {Component} from "@angular/core";
import {EventService} from "../../services/event.service";
import {Event} from "../../models/Event";
import {Router} from "@angular/router";
@Component({
  selector: 'popular-news',
  templateUrl: 'popular-news.component.html'
})

export class PopularNewsComponent{
  events: Event[];

  constructor(private eventService: EventService, private router: Router){
    console.log(localStorage.getItem('token'));
    this.getEvents();
  }

  getEvents(){
    this.eventService.getEvents().subscribe(response=>{this.events=response; console.log(this.events.length)});
  }

  onReadMoreClick(event: Event) {
    this.router.navigate(['events/' + event.id]);
  }
}
