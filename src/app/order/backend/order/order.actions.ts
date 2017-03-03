import { Injectable } from '@angular/core';

import { RestService } from '../../../core/rest.service';
import { IAction } from '../../../shared/interfaces';
import { List } from 'immutable';


export const ORDER_FETCH: string = 'ORDER_FETCH';
export const ORDER_FETCH_START: string = 'ORDER_FETCH_START';
export const ORDER_FETCH_NEXT: string = 'ORDER_FETCH_NEXT';
export const ORDER_FETCH_ERROR: string = 'ORDER_FETCH_ERROR';

export const ORDER_SAVE: string = 'ORDER_SAVE';
export const ORDER_SAVE_START: string = 'ORDER_SAVE_START';
export const ORDER_SAVE_NEXT: string = 'ORDER_SAVE_NEXT';
export const ORDER_SAVE_ERROR: string = 'ORDER_SAVE_ERROR';

@Injectable()
export class OrderActions {

  constructor(private restService: RestService) { }

  fetch(): IAction {
    return {
      type: ORDER_FETCH,
      payload: this.restService.get('order')
    };
  }

  update(order: List<any>) {
    return {
      type: ORDER_SAVE,
      payload: this.restService.post('order', {
        items: order
      })
    };
  }

}
