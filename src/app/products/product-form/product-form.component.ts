import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dcs-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  constructor() { }

  @Input() product: Map<string, any>;
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  ngOnInit() { }
}
