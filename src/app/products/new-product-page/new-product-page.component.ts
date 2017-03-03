import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsActions } from '../backend/products/products.actions';
import { NgRedux } from 'ng2-redux';
import { IState } from '../../shared/interfaces';
import { fromJS } from 'immutable';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  moduleId: module.id,
  selector: 'dcs-new-product-page',
  templateUrl: './new-product-page.component.html'
})
export class NewProductPageComponent implements OnInit {
  constructor(
    private store: NgRedux<IState>,
    private actions: ProductsActions
  ) { }

  @ViewChild('productForm') productForm: ProductFormComponent;

  ngOnInit() { }

  saveProduct(product: Map<string, any>) {
    console.log('saving', product);
    const action = this.actions.save(fromJS(product));
    this.store.dispatch(action);

    action.payload.subscribe((data) => {
      this.productForm.reset();
    });
  }

}




