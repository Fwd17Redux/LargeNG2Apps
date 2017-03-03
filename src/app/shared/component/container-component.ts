import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';


export class ContainerComponent implements OnDestroy {

  subscriptions: Array<Subscription> = [];

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  subscribeToObservable(obs: Observable<any>, callback: Function) {
    this.subscriptions.push(obs.subscribe(callback.bind(this)));
  }

  valueFromObservable(obs: Observable<any>, propertyName: string) {
    this.subscribeToObservable(obs, data => {
      if (data) {
        this[propertyName] = data;
      }
    });
  }
}
