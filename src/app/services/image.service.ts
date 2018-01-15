/**
 * Created by admin on 08/06/2017.
 */
import {Injectable} from '@angular/core';
import {RequestOptions, Headers, Http} from '@angular/http';
import {Observable} from 'rxjs';
import {Media} from '../models/Media';

@Injectable()
export class ImageService {
  private static EVENTSPATH = 'http://localhost:8080/events';

  constructor(private http: Http) {
  }

  getImage(url: string): Observable<Media[]> {
    return this.http.get(url).map(response => {
      return <Media[]>response.json()._embedded.medias;
    });

  }

}
