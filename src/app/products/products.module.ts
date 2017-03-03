import { NgModule } from '@angular/core';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './products.routes';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [ProductsPageComponent, ProductsListComponent],
  providers: [],
})
export class ProductsModule { }
