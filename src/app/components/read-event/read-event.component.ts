/**
 * Created by admin on 12/06/2017.
 */
import {Component} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {EventService} from "../../services/event.service";
import {Event} from "../../models/Event";
@Component({
  selector: 'read-event',
  templateUrl: 'read-event.component.html'
})

export class ReadEventComopnent{
  event: Event;

  constructor(private route: ActivatedRoute, private eventService: EventService){
    this.event=new Event();
    this.route.params.switchMap((params: Params)=>eventService.getEvent(+params['id'])).subscribe(response=>this.event=response);
  }
}
