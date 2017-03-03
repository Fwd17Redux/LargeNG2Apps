import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { fromJS } from 'immutable';

import { ContainerComponent } from '../../shared/component/container-component';
import { IState } from '../../shared/interfaces';
import { OrderActions } from '../backend/order/order.actions';
import { ProductsActions } from '../../products/backend/products/products.actions';
import { orderTotalsByUser, orderTotal } from '../backend/order/order.selectors';


@Component({
  selector: 'dcs-order-page',
  templateUrl: './order-page.component.html'
})
export class OrderPageComponent extends ContainerComponent implements OnInit {

  @select(['order', 'entities']) order$: Observable<any>;
  @select(['order', 'loaded']) orderLoaded$: Observable<boolean>;
  @select(['products', 'entities']) products$: Observable<any>;
  @select(orderTotalsByUser) orderTotalsByUser$: Observable<any>;
  @select(orderTotal) orderTotal$: Observable<number>;

  constructor(private store: NgRedux<IState>, private actions: OrderActions, private productsActions: ProductsActions) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(this.productsActions.fetch());
    this.store.dispatch(this.actions.fetch());
  }

  updateOrder(orderData: any): void {
    orderData = fromJS(orderData);
    orderData = orderData
      .filter(item => item.get('user') && item.get('productId'));
    this.store.dispatch(this.actions.update(orderData));
  }

}
