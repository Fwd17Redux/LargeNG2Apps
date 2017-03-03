import { Injectable } from '@angular/core';
import { RestService } from '../../../core/rest.service';
import { IAction } from '../../../shared/interfaces';
import { Map } from 'immutable';
import { Observable } from 'rxjs/Observable';


export const PRODUCTS_FETCH: string = 'PRODUCTS_FETCH';
export const PRODUCTS_FETCH_START: string = 'PRODUCTS_FETCH_START';
export const PRODUCTS_FETCH_NEXT: string = 'PRODUCTS_FETCH_NEXT';
export const PRODUCTS_FETCH_ERROR: string = 'PRODUCTS_FETCH_ERROR';

export const PRODUCTS_FETCH_ONE: string = 'PRODUCTS_FETCH_ONE';
export const PRODUCTS_FETCH_ONE_START: string = 'PRODUCTS_FETCH_ONE_START';
export const PRODUCTS_FETCH_ONE_NEXT: string = 'PRODUCTS_FETCH_ONE_NEXT';
export const PRODUCTS_FETCH_ONE_ERROR: string = 'PRODUCTS_FETCH_ONE_ERROR';

export const PRODUCTS_SAVE: string = 'PRODUCTS_SAVE';
export const PRODUCTS_SAVE_START: string = 'PRODUCTS_SAVE_START';
export const PRODUCTS_SAVE_NEXT: string = 'PRODUCTS_SAVE_NEXT';
export const PRODUCTS_SAVE_ERROR: string = 'PRODUCTS_SAVE_ERROR';

export const PRODUCTS_DELETE: string = 'PRODUCTS_DELETE';
export const PRODUCTS_DELETE_START: string = 'PRODUCTS_DELETE_START';
export const PRODUCTS_DELETE_NEXT: string = 'PRODUCTS_DELETE_NEXT';
export const PRODUCTS_DELETE_ERROR: string = 'PRODUCTS_DELETE_ERROR';


@Injectable()
export class ProductsActions {

  constructor(private restService: RestService) { }

  fetch(): IAction {
    return {
      type: PRODUCTS_FETCH,
      payload: this.restService.get('products')
    };
  }

  fetchOne(id: number | string): IAction {
    return {
      type: PRODUCTS_FETCH_ONE,
      payload: this.restService.get(`products/${id}`)
    };
  }


  save(product: Map<string, any>): IAction {
    let payload: Observable<any>;

    if (product.get('id')) {
      payload = this.restService.put(`products/${product.get('id')}`, product);
    } else {
      payload = this.restService.post('products', product);
    }

    return {
      type: PRODUCTS_SAVE,
      payload: payload
    };
  }

  delete(product: Map<string, any>): IAction {
    return {
      type: PRODUCTS_DELETE,
      payload: this.restService
        .delete(`products/${product.get('id')}`)
        .map(() => product)
    };
  }

}
