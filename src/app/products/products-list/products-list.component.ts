import { Component, Input, Output, EventEmitter } from '@angular/core';
import { List, Map } from 'immutable';

@Component({
  selector: 'dcs-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {

  @Input() products: List<Map<string, any>>;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();


}
