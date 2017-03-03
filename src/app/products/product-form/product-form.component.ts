import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'dcs-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {

  private form: FormGroup;

  @Input() product: Map<string, any>;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      id: [''],
      articleId: ['', Validators.required],
      label: ['', Validators.required],
      price: ['42', Validators.required],
    });
  }

  reset(): void {
    this.form.reset();
  }

  ngOnInit() {
  }

}
