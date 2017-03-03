import { OpaqueToken } from '@angular/core';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import { IAction, IReducer, IState } from './shared/interfaces';
// import { productsReducer } from './products/backend/products/products.reducer';
// import { currentProductReducer } from './products/backend/products/current-product.reducer';
// import { orderReducer } from './order/backend/order/order.reducer';


// make Redux happy, remove when first real reducer is added
const initialState: IState = fromJS({
  who: 'World'
});

export function greetingReducer(state: IState = initialState, action: IAction): IState {
  return state;
}

export const RootReducer: OpaqueToken = new OpaqueToken('RootReducer');

export function rootReducer(): IReducer {
  return combineReducers({
    // greeting: greetingReducer,
    // products: productsReducer,
    // currentProduct: currentProductReducer,
    // order: orderReducer
  });
}
