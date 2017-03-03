import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Map } from 'immutable';

import { PresentationalComponent } from '../../shared/component/presentational-component';


@Component({
  selector: 'dcs-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent extends PresentationalComponent implements OnChanges {

  @Input() product: Map<string, any>;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  private form: FormGroup;

  constructor(fb: FormBuilder) {
    super();

    this.form = fb.group({
      id: [''],
      articleId: ['', Validators.required],
      label: ['', Validators.required],
      price: [5.95, Validators.required]
    });
  }

  ngOnChanges() {
    if (this.product) {
      this.form.setValue(this.product.toJS());
    }
  }

  reset(): void {
    this.form.reset();
  }
}
