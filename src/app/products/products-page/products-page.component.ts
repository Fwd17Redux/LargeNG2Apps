import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IState } from '../../shared/interfaces';
import { ProductsActions } from '../backend/products/products.actions';

@Component({
  moduleId: module.id,
  selector: 'dcs-product-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
  constructor(
    private store: NgRedux<IState>,
    private actions: ProductsActions
  ) { }

  deleteProducts(product) { }

  ngOnInit() {
    this.store.dispatch(this.actions.fetch());
  }
}
