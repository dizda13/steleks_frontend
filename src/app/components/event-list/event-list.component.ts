/**
 * Created by admin on 12/06/2017.
 */
import {Component, Input} from "@angular/core";
import {Event} from "../../models/Event";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../services/event.service";
import {Media} from "../../models/Media";
@Component({
  selector: 'events-list',
  templateUrl: './event-list.component.html'
})


export class EventListComponent{

  @Input() type;
  events: Event[];
  medias: Media[];

  constructor(private route: ActivatedRoute, private eventService: EventService){
    if(this.route.snapshot.url[0].path=="news") {
      eventService.getEvents().subscribe(response=>this.events=response);
      this.type = "Novosti";
    }
    else {
      this.type = "Dešavanja";
      eventService.getEvents().subscribe(response=>{return this.events=response});
    }
  }
}
