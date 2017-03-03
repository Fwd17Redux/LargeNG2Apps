import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List, Map } from 'immutable';

@Component({
  moduleId: module.id,
  selector: 'dcs-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  constructor() { }

  @Input() products: List<Map<string, any>>;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  ngOnInit() { }
}
