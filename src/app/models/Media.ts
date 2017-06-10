/**
 * Created by admin on 09/06/2017.
 */
export class Media{
  private _contentUrl: string;
  private _creationDate: Date;
  private _createdById: number;


  constructor() {
  }

  get contentUrl(): string {
    return this._contentUrl;
  }

  get creationDate(): Date {
    return this._creationDate;
  }

  get createdById(): number {
    return this._createdById;
  }


  set contentUrl(value: string) {
    this._contentUrl = value;
  }

  set creationDate(value: Date) {
    this._creationDate = value;
  }

  set createdById(value: number) {
    this._createdById = value;
  }
}
