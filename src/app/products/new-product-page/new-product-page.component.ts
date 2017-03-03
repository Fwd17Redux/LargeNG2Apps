import { Component, ViewChild } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IState, IAction } from '../../shared/interfaces';
import { ProductsActions } from '../backend/products/products.actions';
import { fromJS } from 'immutable';
import { ProductFormComponent } from '../product-form/product-form.component';


@Component({
  selector: 'dcs-product-page',
  templateUrl: './new-product-page.component.html'
})
export class NewProductPageComponent {

  @ViewChild('productForm') productForm: ProductFormComponent;

  constructor(private store: NgRedux<IState>, private actions: ProductsActions) {
  }

  saveProduct(product: Map<string, any>): void {
    const action: IAction = this.actions.save(fromJS(product));
    this.store.dispatch(action);

    action.payload.subscribe((data) => {
      this.productForm.reset();
    });
  }

}
