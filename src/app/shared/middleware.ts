import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import * as createLogger from 'redux-logger';

import { IState } from './interfaces';


// Middleware to automatically dispatch async actions when getting an Observable as payload
export const observableMiddleware: any = store => next => action => {
  if (action.payload instanceof Observable) {
    let baseType: string = action.type;
    let obs: Observable<any> = action.payload;

    if (action.meta && action.meta.cancel) {
      // if the action has a cancel observable, use it
      obs = obs.takeUntil(action.meta.cancel);
    }

    store.dispatch({
      type: `${baseType}_START`,
      meta: action.meta
    });

    obs.subscribe(
      (data: any) => store.dispatch({ type: `${baseType}_NEXT`, payload: data }),
      (error: Response) => store.dispatch({ type: `${baseType}_ERROR`, payload: error }),
      () => {
        if (action.meta && action.meta.dispatchCompleted) {
          store.dispatch({ type: `${baseType}_COMPLETED` });
        }
      }
    );

  } else {
    return next(action);
  }
};

// configure logger middleware to work with immutables
export const loggerMiddleware: any = createLogger({
  stateTransformer: (state: IState) => state.toJS()
});


/**
 * Store enhancer to ensure that after a state change there always is a angular2 tick to ensure change detection
 *
 * @param {NgZone} zone
 * @returns any
 */
export function tickEnhancer(zone:  NgZone) {
  return next => (reducer, initialState, enhancer) => {
    let store = next(reducer, initialState, enhancer);

    store.subscribe(() => {
      // fire change detection
      zone.run(() => { });
    });

    return store;
  };
}
