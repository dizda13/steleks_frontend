/**
 * Created by admin on 04/06/2017.
 */
import {Component, NgModule, Input, OnInit} from "@angular/core";
import { SliderContectComponent } from "../slider-contect/slider-contect.component";
import {EventService} from "../../services/event.service";
import {Event} from "../../models/Event";
import {ImageService} from "../../services/image.service";
import {Media} from "../../models/Media";

@Component({
  selector: 'news-slider',
  templateUrl: './news-slider.component.html',
})

/*@NgModule({
  declarations: [ SliderContectComponent ]
})*/


export class NewsSliderComponent implements OnInit {

  events: Event[];

  ngOnInit(): void {
    this.getEvents();
  }

  constructor(private eventService: EventService, private imageService: ImageService){
  }

  getEvents(){
    this.eventService.getEvents().subscribe(response => {
      this.events = response;
    });
  }

  next(){

  }
}
