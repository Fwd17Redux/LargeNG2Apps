import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found-component';

export const routes: Array<Route> = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];
