import { IAction, IState } from '../../../shared/interfaces';
import { fromJS } from 'immutable';
import { PRODUCTS_FETCH_ONE_START, PRODUCTS_FETCH_ONE_NEXT, PRODUCTS_FETCH_ONE_ERROR } from './products.actions';

export const initialState: IState = fromJS({
  entity: null,
  loading: false,
  error: null
});

export function currentProductReducer(state: IState = initialState, action: IAction): IState {
  switch (action.type) {

    case PRODUCTS_FETCH_ONE_START:
      return state.merge(fromJS({
        entity: null,
        loading: true,
        error: null
      }));

    case PRODUCTS_FETCH_ONE_NEXT:
      return state.merge(fromJS({
        entity: action.payload,
        loading: false,
        error: null
      }));

    case PRODUCTS_FETCH_ONE_ERROR:
      return state.merge(fromJS({
        entity: null,
        loading: false,
        error: action.payload
      }));

  }

  return state;
}
