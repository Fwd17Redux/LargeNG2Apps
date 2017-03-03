import { NgModule } from '@angular/core';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './products.routes';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsActions } from './backend/products/products.actions';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), CommonModule],
  exports: [],
  declarations: [ProductsPageComponent, ProductsListComponent],
  providers: [ProductsActions],
})
export class ProductsModule { }
