import { NgModule } from '@angular/core';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsListComponent } from './products-list/products-list.component';

import { RouterModule } from '@angular/router';
import { routes } from './products.routes';
import { ProductsActions } from './backend/products/products.actions';

import { CommonModule } from '@angular/common';
import { NewProductPageComponent } from './new-product-page/new-product-page.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsListComponent,
    NewProductPageComponent,
    ProductFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  providers: [ProductsActions]
})
export class ProductsModule {

}

