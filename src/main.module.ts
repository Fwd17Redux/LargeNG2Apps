import { NgModule, ApplicationRef, Inject, NgZone } from '@angular/core';
import { createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { fromJS, Map } from 'immutable';

// import { AppComponent } from './app/app.component';
import { SharedModule } from './app/shared/shared.module';
import { AppModule } from './app/app.module';
import { IReducer, IState } from './app/shared/interfaces';
import { loggerMiddleware, observableMiddleware, tickEnhancer } from './app/shared/middleware';
import { rootReducer, RootReducer } from './app/root.reducer';

console.time('bootstrap');

@NgModule({
  bootstrap: [
    // AppComponent
  ],
  declarations: [
  ],
  imports: [
    // app
    SharedModule,
    AppModule,
    // vendors
    NgReduxModule.forRoot()
  ],
  providers: [
    { provide: RootReducer, useFactory: rootReducer },
    DevToolsExtension
  ]
})
export class MainModule {
  constructor(
    private appRef: ApplicationRef,
    private store: NgRedux<IState>,
    private devTools: DevToolsExtension,
    private zone: NgZone,
    @Inject(RootReducer) private rootReducer: IReducer,
  ) {
    let appState: IState;

    if (module.hot && module.hot.data) {
      appState = module.hot.data.appState;
    }
    this.setupStore(appState);
  }

  hmrOnInit(hmrStore) {
    if (!hmrStore) return;

    if ('restoreInputValues' in hmrStore) {
      hmrStore.restoreInputValues();
    }
    // change detection
    this.appRef.tick();
    delete hmrStore.restoreInputValues;
    // console.timeEnd('hot reload');
  }

  hmrOnDestroy(hmrStore) {
    // store app state right before hot reload
    hmrStore.appState = this.store.getState();

    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    hmrStore.disposeOldHosts = createNewHosts(cmpLocation);

    hmrStore.restoreInputValues = createInputTransfer();
    // remove styles - don't use this with global styles (webpack style-loader)!
    // removeNgStyles();
  }

  hmrAfterDestroy(hmrStore) {
    // display new elements
    hmrStore.disposeOldHosts();
    delete hmrStore.disposeOldHosts;
    // console.time('hot reload');
  }

  protected setupStore(appState: IState = Map({})): void {
    let middleware: Array<any> = [observableMiddleware];
    let enhancers: Array<any> = [tickEnhancer(this.zone)];
    let tickTimeoutId: any;

    if (ENV === 'development') {
      middleware = [...middleware, loggerMiddleware];

      // configure devtools if installed in Chrome
      if (this.devTools.isEnabled()) {
        enhancers = [...enhancers, this.devTools.enhancer({
          deserializeState: ((state: IState) => {
            // this is for loading the state via devtols from a JSON dump
            clearTimeout(tickTimeoutId);
            tickTimeoutId = setTimeout(() => {
              console.log('State restored, calling change detection.');
              // fire change detection
              this.zone.run(() => { });
            }, 100);
            return fromJS(state);
          })
        })];
      }
    }

    this.store.configureStore(this.rootReducer, appState, middleware, enhancers);
    // fire change detection
    this.zone.run(() => { });
  }

}
