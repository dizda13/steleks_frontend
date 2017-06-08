/**
 * Created by admin on 04/06/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
  selector:"slider-contect",
  templateUrl:"./slider-contect.component.html",
  styleUrls:['./slider-contect.component.css']
})

export class SliderContectComponent{
  @Input() title: String;
  @Input() shortText: String;

}
