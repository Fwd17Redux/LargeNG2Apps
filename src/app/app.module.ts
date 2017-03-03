import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';


import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    // components
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    CoreModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' }
  ]
})
export class AppModule { }
