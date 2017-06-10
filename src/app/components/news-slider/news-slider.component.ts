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
  ngOnInit(): void {
    this.getEvents();
  }

  events: Event[];
  images: Media[];
  image: string;
  constructor(private eventService: EventService, private imageService:ImageService){
    this.getEvents();

  }

  getEvents(){
    this.eventService.getEvents().subscribe(response=>{
      this.events=response;
      this.imageService.getImage(this.events[0].mediaSet).subscribe(response=>{this.images=response;this.image=this.images[0].contentUrl});
    });
  }

  next(){

  }
}
