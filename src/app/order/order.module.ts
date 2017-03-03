import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { orderRouting } from './order.routes';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderActions } from './backend/order/order.actions';
import { OrderTotalsComponent } from './order-totals/order-totals.component';


@NgModule({
  declarations: [
    OrderPageComponent,
    OrderFormComponent,
    OrderTotalsComponent
  ],
  providers: [
    OrderActions
  ],
  imports: [
    SharedModule,
    orderRouting
  ]
})
export class OrderModule { }
