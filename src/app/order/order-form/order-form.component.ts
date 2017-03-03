import { PresentationalComponent } from '../../shared/component/presentational-component';
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { List, Map, fromJS } from 'immutable';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'dcs-order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent extends PresentationalComponent implements OnChanges {

  @Input() order: List<Map<string, any>>;
  @Input() orderLoaded: boolean;
  @Input() products: List<Map<string, any>>;
  @Output() onOrderChanged: EventEmitter<any> = new EventEmitter();

  formChanges$: Observable<any>;
  changeSubscription: Subscription;

  users: List<string> = List([
    'AW',
    'CG',
    'DV',
    'FU',
    'FR',
    'KD',
    'MR',
    'MD',
    'MM',
    'PD',
    'WW'
  ]);

  form: FormArray;

  constructor(private fb: FormBuilder) {
    super();
    this.form = fb.array([]);
    this.formChanges$ = this._createChangeObservable(this.form);
  }

  ngOnChanges(): void {
    // if the order data comes via server response (this.orderLoaded), (re)build the form from scratch
    if (this.orderLoaded) {

      // remove the old subscription, we will rebuild the form and subscribe again
      if (this.changeSubscription) {
        this.changeSubscription.unsubscribe();
      }

      this.form.controls = [];

      // create a row for each item in the order
      this.order.forEach(item => {
        this.form.push(this._formGroupForItem(item));
      });

      // add another empty row
      this.form.push(this._formGroupForItem());

      // after the order data is loaded, start listening for user changes and send them back to server
      this.changeSubscription = this.formChanges$.subscribe(data => {
        this.onOrderChanged.next(data);
      });
    }
  }

  getProduct(id: number): Map<string, any> {
    id = Number(id);
    return this.products.find(p => p.get('id') === id);
  }

  getPrice(id: number): number {
    id = Number(id);
    let product = this.getProduct(id);
    if (product) {
      return product.get('price');
    } else {
      return 0;
    }
  }

  getTotalPrice(productGroup: FormGroup): number {
    let product = this.getProduct(productGroup.value.productId);
    if (product) {
      return product.get('price') * productGroup.value.numberOfProducts;
    } else {
      return 0;
    }
  }

  addItem(): void {
    this.form.push(this._formGroupForItem());
  }

  deleteItem(index: number): void {
    this.form.removeAt(index);
  }

  private _formGroupForItem(orderItem?: Map<string, any>): FormGroup {
    if (orderItem) {
      return this.fb.group({
        user: [orderItem.get('user')],
        productId: [orderItem.get('productId')],
        numberOfProducts: [orderItem.get('numberOfProducts')]
      });
    } else {
      return this.fb.group({
        user: [''],
        productId: [null],
        numberOfProducts: [0]
      });
    }
  }

  private _createChangeObservable(form: FormArray): Observable<any> {
    return form.valueChanges
      .debounceTime(200)
      .map(order => fromJS(order))
      .map(order => {
        // remove all empty rows
        return order.filter(item => {
          return item.get('user') && item.get('productId');
        });
      })
      .distinctUntilChanged((oldData, newData) => {
        return newData.equals(oldData);
      });
  }

}
