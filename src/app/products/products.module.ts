import { NgModule } from '@angular/core';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './products.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [ProductsPageComponent],
  providers: [],
})
export class ProductsModule { }
