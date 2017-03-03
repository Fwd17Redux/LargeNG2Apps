import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';

const routes: Routes = [
  { path: 'order', component: OrderPageComponent }
];

export const orderRouting: ModuleWithProviders = RouterModule.forChild(routes);

