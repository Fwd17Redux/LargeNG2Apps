import { IState, IAction } from '../../../shared/interfaces';
import { fromJS } from 'immutable';

export const initialState: IState = fromJS({
  entities: [],
  loading: false,
  error: null
});

export function productsReducer(state: IState = initialState, action: IAction): IState {
  switch (action.type) {
  }

  return state;
}
