import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IState } from '../../shared/interfaces';
import { ProductsActions } from '../backend/products/products.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dcs-product-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {

  @select(['products', 'entities']) products$: Observable<any>;
  @select(['products', 'loading']) loading$: Observable<any>;

  constructor(
    private store: NgRedux<IState>,
    private actions: ProductsActions) {
  }

  ngOnInit(): void {
    this.store.dispatch(this.actions.fetch());
  }

  deleteProduct(product): void {
    this.store.dispatch(this.actions.delete(product));
  }

}
