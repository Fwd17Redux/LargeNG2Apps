import { IAction, IState } from '../../../shared/interfaces';
import { fromJS } from 'immutable';
import { ORDER_FETCH_START, ORDER_FETCH_NEXT, ORDER_FETCH_ERROR, ORDER_SAVE_NEXT } from './order.actions';

export const initialState: IState = fromJS({
  entities: [],
  loading: false,
  error: null,
  loaded: false
});

export function orderReducer(state: IState = initialState, action: IAction): IState {
  switch (action.type) {

    case ORDER_FETCH_START:
      return state.merge(fromJS({
        entities: [],
        loading: true,
        error: null
      }));

    case ORDER_FETCH_NEXT:
      return state.merge(fromJS({
        entities: action.payload.items,
        loading: false,
        error: null,
        loaded: true
      }));

    case ORDER_FETCH_ERROR:
      return state.merge(fromJS({
        entities: [],
        loading: false,
        error: action.payload
      }));


    case ORDER_SAVE_NEXT:
      return state.merge(fromJS({
        entities: action.payload.items,
        loaded: false
      }));

  }

  return state;
}
