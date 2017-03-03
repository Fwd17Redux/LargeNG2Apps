import { NgModule } from '@angular/core';

import { OrderPageComponent } from './order-page/order-page.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { OrderActions } from './backend/order/order.actions';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './order.routes';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [OrderPageComponent, OrderFormComponent, OrderTotalsComponent],
  providers: [OrderActions],
})
export class OrderModule { }
