import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ISettings } from '../shared/interfaces';
import { APP_SETTINGS } from '../settings';


function extractResponseData(response: Response): any {
  let payload: any;

  try {
    payload = response.json();
  } catch (e) {
    payload = {};
  }

  return payload;
}

@Injectable()
export class RestService {

  constructor(
    private http: Http,
    @Inject(APP_SETTINGS) private settings: ISettings
  ) { }

  get(path: string, options: any = {}): Observable<any> {
    let requestOptions = new RequestOptions({
      method: RequestMethod.Get
    });

    return this.request(path, requestOptions.merge(options));
  }

  post(path: string, body: any, options: any = {}): Observable<any> {
    let requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      body: body
    });

    return this.request(path, requestOptions.merge(options));
  }

  put(path: string, body: any, options: any = {}): Observable<any> {
    let requestOptions = new RequestOptions({
      method: RequestMethod.Put,
      body: body
    });

    return this.request(path, requestOptions.merge(options));
  }

  delete(path: string, options: any = {}): Observable<any> {
    let requestOptions = new RequestOptions({
      method: RequestMethod.Delete
    });

    return this.request(path, requestOptions.merge(options));
  }

  protected request(path: string, requestOptions: RequestOptions): Observable<any> {
    let url: string;

    if (path.startsWith('http')) {
      url = path;
    } else {
      url = `${this.settings.apiUrl}/${path}`;
    }

    return this.http
      .request(url, requestOptions)
      //  .delay(300)
      .map(extractResponseData)
      .share();
  }


}
