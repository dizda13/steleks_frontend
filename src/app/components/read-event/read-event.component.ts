/**
 * Created by admin on 12/06/2017.
 */
import {Component} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {EventService} from "../../services/event.service";
import {Event} from "../../models/Event";
import {Media} from "../../models/Media";
@Component({
  selector: 'read-event',
  templateUrl: 'read-event.component.html'
})

export class ReadEventComopnent{
  event: Event;
  medias: Media[];
  media: Media;
  preLoad: string="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
  constructor(private route: ActivatedRoute, private eventService: EventService){
    this.event=new Event();
    this.event.mediaSet=[];
    this.event.mediaSet[0]=new Media();
    console.log(this.event);
    this.event.mediaSet[0].contentUrl="http://lorempixel.com/800/400/food/2";
    this.route.params.switchMap((params: Params)=>eventService.getEvent(+params['id'])).subscribe(response=>{this.event=response;this.medias=this.event.mediaSet;
    this.preLoad=this.event.mediaSet[0].contentUrl;
    });
  }
}
