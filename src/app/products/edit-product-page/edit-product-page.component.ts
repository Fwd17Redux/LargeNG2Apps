import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { ActivatedRoute } from '@angular/router';

import { ContainerComponent } from '../../shared/component/container-component';
import { IState, IAction } from '../../shared/interfaces';
import { ProductsActions } from '../backend/products/products.actions';
import { Observable } from 'rxjs/Observable';
import { fromJS } from 'immutable';


@Component({
  selector: 'dcs-edit-product-page',
  templateUrl: './edit-product-page.component.html'
})
export class EditProductPageComponent extends ContainerComponent {

  @select(['currentProduct', 'entity']) product$: Observable<any>;

    constructor(private store: NgRedux<IState>, private actions: ProductsActions, private route: ActivatedRoute ) {
    super();

    this.route.params.forEach((params: any) => {
      this.store.dispatch(this.actions.fetchOne(params.id));
    });
  }

  saveProduct(product: Map<string, any>): void {
    const action: IAction = this.actions.save(fromJS(product));
    this.store.dispatch(action);
  }

}
