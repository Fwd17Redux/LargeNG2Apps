import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';


import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found-component';
import { ProductsModule } from './products/products.module';
import { CalculatorModule } from './calculator/calculator.module';
import { OrderModule } from './order/order.module';


@NgModule({
  declarations: [
    // components
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    CoreModule,
    SharedModule,
    ProductsModule,
    CalculatorModule,
    OrderModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' }
  ]
})
export class AppModule { }
