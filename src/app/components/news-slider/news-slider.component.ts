/**
 * Created by admin on 04/06/2017.
 */
import {Component, NgModule, Input} from "@angular/core";
import { SliderContectComponent } from "../slider-contect/slider-contect.component";
import {EventService} from "../../services/event.service";
import {Event} from "../../models/Event";
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'news-slider',
  templateUrl: './news-slider.component.html',
})

/*@NgModule({
  declarations: [ SliderContectComponent ]
})*/


export class NewsSliderComponent{

  events: Event[];
  image: string;
  constructor(private eventService: EventService, private imageService:ImageService){
     this.getEvents();
     imageService.getImage("http://localhost:8080/events/medias/3").subscribe(response=>this.image=response);
  }

  getEvents(){
    this.eventService.getEvents().subscribe(response=>{this.events=response;console.log(this.events[0].mediaSet + " dino")});
  }

}
