/**
 * Created by admin on 04/06/2017.
 */
import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {Event} from "../../models/Event";

@Component({
  selector:"slider-contect",
  templateUrl:"./slider-contect.component.html",
  styleUrls:['./slider-contect.component.css']
})

export class SliderContectComponent{
  @Input() event: Event;

  constructor(private router: Router){

  }

  onReadMoreClick() {
    console.log("CLICKED ON ID! " + this.event);
    this.router.navigate(['events/' + this.event.id]);
  }
}
