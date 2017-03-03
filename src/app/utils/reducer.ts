import { IAction, IReducer, IState } from '../shared/interfaces';

export function createReducer(initialState: IState, handlers: {[key: string]: IReducer}) {
  return function reducer(state: IState = initialState, action?: IAction): IState {
    if (action && handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
