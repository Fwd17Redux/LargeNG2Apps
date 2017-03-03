import { Routes } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';

import { observableMiddleware } from '../shared/middleware';

// demo for tslint - give it an error to display
// const foo: number = 42;

const middlewares = [observableMiddleware];
export const createMockStore: Function = configureStore(middlewares);

export class FakeRestService {

  public path: string;
  public options: any;
  public body: any;

  get(path: string, options: any = {}): Observable<any> {
    this.path = path;
    this.options = options;
    return Observable.of('fake payload');
  }

  post(path: string, body: any, options: any = {}): Observable<any> {
    this.path = path;
    this.options = options;
    this.body = body;
    return Observable.of('fake payload');
  }

  put(path: string, body: any, options: any = {}): Observable<any> {
    this.path = path;
    this.body = body;
    return Observable.of('fake payload');
  }

  delete(path: string, options: any = {}): Observable<any> {
    this.path = path;
    this.options = options;
    return Observable.of('fake payload');
  }

}

class DummyComponent { }

export const dummyRoutes: Routes = [
  {
    path: '**', component: DummyComponent
  }
];


export const customMatchers: jasmine.CustomMatcherFactories = {
  toEqualImmutable: function (util: jasmine.MatchersUtil, customEqualityTesters: Array<jasmine.CustomEqualityTester>): jasmine.CustomMatcher {
    return {
      compare: function (actual: any, expected: any): jasmine.CustomMatcherResult {
        actual = fromJS(actual);
        expected = fromJS(expected);

        let pass: boolean = actual.equals(expected);
        let message: string = '';

        if (!pass) {
          message = `
Expected

${JSON.stringify(actual.toJSON(), null, 2)}

to equal

${JSON.stringify(expected.toJSON(), null, 2)}
          `;
        }

        const result: jasmine.CustomMatcherResult = {
          pass: pass,
          message: message
        };

        return result;
      }
    };
  }
};
