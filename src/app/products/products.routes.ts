import { Route } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { NewProductPageComponent } from './new-product-page/new-product-page.component';

export const routes: Array<Route> = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/new', component: NewProductPageComponent }
];
