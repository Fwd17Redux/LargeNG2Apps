import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dcs-product-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
  constructor() { }

  deleteProducts(product) { }

  ngOnInit() { }
}
