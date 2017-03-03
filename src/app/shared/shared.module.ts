import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PricePipe } from './pipes/Price.pipe';

import { APP_SETTINGS, settings } from '../settings';


@NgModule({
  declarations: [
    PricePipe
  ],
  providers: [
    { provide: APP_SETTINGS, useValue: settings }
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // NgReduxModule
  ],
  exports: [
    // Angular
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // Shared app stuff
    PricePipe
  ]
})
export class SharedModule { }
