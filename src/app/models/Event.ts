import {Media} from "./Media";
import {isUndefined} from "util";
/**
 * Created by admin on 31/05/2017.
 */
export class Event{
  public id: Number;

  public title: string;

  public shortText: string;

  public longText: string;

  public dateTime: Date;

  public duration: number;

  public createdById: number;

  public eventType: string;

  public mediaSet: Media[];


  constructor() {
  }
}
