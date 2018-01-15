import {XHRBackend, Http, RequestOptions} from '@angular/http';
import {HttpInterceptor} from './HttpInterceptor';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new HttpInterceptor(xhrBackend, requestOptions);
}
