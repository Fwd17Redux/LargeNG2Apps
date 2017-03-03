import { Observable } from 'rxjs/Observable';
import { Map } from 'immutable';


export interface ISettings {
  apiUrl: string;
}

export interface IState extends Map<string, any> { }

export interface IAction {
  type: string;
  payload?: any;
  meta?: {
    dispatchCompleted?: boolean,
    cancel?: Observable<any>,
    searchTerm?: 'string'
  };
}

export interface IReducer {
  (state?: IState, action?: IAction): IState;
}
