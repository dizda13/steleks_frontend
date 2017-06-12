import {Media} from "./Media";
import {isUndefined} from "util";
/**
 * Created by admin on 31/05/2017.
 */
export class Event{
  private  _id: Number;

  private _title: string;

  private _shortText: string;

  private _longText: string;

  private _dateTime: Date;

  private _duration: number;

  private _createdById: number;

  private _eventType: string;

  private _mediaSet: Media[];


  constructor() {
  }

  get id(): Number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get shortText(): string {
    return this._shortText;
  }

  get longText(): string {
    return this._longText;
  }

  get dateTime(): Date {
    return this._dateTime;
  }

  get duration(): number {
    return this._duration;
  }

  get createdById(): number {
    return this._createdById;
  }

  get eventType(): string {
    return this._eventType;
  }

  get mediaSet(): Media[] {
    return this._mediaSet;
  }


  set id(value: Number) {
    this._id = value;
  }

  set title(value: string) {
    this._title = value;
  }

  set shortText(value: string) {
    this._shortText = value;
  }

  set longText(value: string) {
    this._longText = value;
  }

  set dateTime(value: Date) {
    this._dateTime = value;
  }

  set duration(value: number) {
    this._duration = value;
  }

  set createdById(value: number) {
    this._createdById = value;
  }

  set eventType(value: string) {
    this._eventType = value;
  }

  set mediaSet(value: Media[]) {
    this._mediaSet = value;
  }

  getMediaContectUrlById(i: number): string{
    if(isUndefined(this.mediaSet))
      return "";
    return this.mediaSet[i].contentUrl;
  }
}
