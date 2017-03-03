import { IAction, IState } from '../../../shared/interfaces';
import { PRODUCTS_FETCH_START, PRODUCTS_FETCH_NEXT, PRODUCTS_FETCH_ERROR, PRODUCTS_DELETE_NEXT } from './products.actions';
import { fromJS } from 'immutable';

export const initialState: IState = fromJS({
  entities: [],
  loading: false,
  error: null
});

export function productsReducer(state: IState = initialState, action: IAction): IState {
  switch (action.type) {

    case PRODUCTS_FETCH_START:
      return state.merge(fromJS({
        entities: [],
        loading: true,
        error: null
      }));

    case PRODUCTS_FETCH_NEXT:
      return state.merge(fromJS({
        entities: action.payload,
        loading: false,
        error: null
      }));

    case PRODUCTS_FETCH_ERROR:
      return state.merge(fromJS({
        entities: [],
        loading: false,
        error: action.payload
      }));

    case PRODUCTS_DELETE_NEXT:
      return state.update('entities', entities => {
        return entities.filterNot(entity => entity.get('id') === action.payload.get('id'));
      });

  }

  return state;
}
