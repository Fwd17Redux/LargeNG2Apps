/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './main.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from '@angular/http/src/http_module';
import * as import9 from './app/shared/shared.module';
import * as import10 from './app/core/core.module';
import * as import11 from './app/products/products.module';
import * as import12 from './app/order/order.module';
import * as import13 from './app/app.module';
import * as import14 from 'ng2-redux/lib/ng-redux.module';
import * as import15 from '@angular/core/src/application_init';
import * as import16 from '@angular/core/src/testability/testability';
import * as import17 from '@angular/core/src/application_ref';
import * as import18 from 'ng2-redux/lib/components/dev-tools';
import * as import19 from '@angular/common/src/localization';
import * as import20 from '@angular/core/src/linker/compiler';
import * as import21 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import22 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import23 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import24 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import25 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import26 from '@angular/core/src/linker/view_utils';
import * as import27 from '@angular/platform-browser/src/browser/title';
import * as import28 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import29 from '@angular/forms/src/form_builder';
import * as import30 from '@angular/http/src/backends/browser_xhr';
import * as import31 from '@angular/http/src/base_response_options';
import * as import32 from '@angular/http/src/backends/xhr_backend';
import * as import33 from '@angular/http/src/base_request_options';
import * as import34 from './app/core/rest.service';
import * as import35 from './app/products/backend/products/products.actions';
import * as import36 from './app/order/backend/order/order.actions';
import * as import37 from '@angular/common/src/location/location';
import * as import38 from '@angular/router/src/url_tree';
import * as import39 from '@angular/router/src/router_outlet_map';
import * as import40 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import41 from '@angular/router/src/router_preloader';
import * as import42 from '@angular/core/src/di/injector';
import * as import43 from './app/products/products-page/products-page.component.ngfactory';
import * as import44 from './app/products/new-product-page/new-product-page.component.ngfactory';
import * as import45 from './app/products/edit-product-page/edit-product-page.component.ngfactory';
import * as import46 from './app/order/order-page/order-page.component.ngfactory';
import * as import47 from './app/home/home.component.ngfactory';
import * as import48 from './app/not-found/not-found.component.ngfactory';
import * as import49 from './app/app.component.ngfactory';
import * as import50 from '@angular/core/src/application_tokens';
import * as import51 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import52 from '@angular/platform-browser/src/dom/events/key_events';
import * as import53 from '@angular/core/src/zone/ng_zone';
import * as import54 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import55 from './app/settings';
import * as import56 from './app/products/products-page/products-page.component';
import * as import57 from './app/products/new-product-page/new-product-page.component';
import * as import58 from './app/products/edit-product-page/edit-product-page.component';
import * as import59 from './app/order/order-page/order-page.component';
import * as import60 from './app/home/home.component';
import * as import61 from './app/not-found/not-found.component';
import * as import62 from '@angular/common/src/location/platform_location';
import * as import63 from '@angular/common/src/location/location_strategy';
import * as import64 from '@angular/router/src/router';
import * as import65 from '@angular/core/src/console';
import * as import66 from './app/root.reducer';
import * as import67 from '@angular/core/src/error_handler';
import * as import68 from 'ng2-redux/lib/components/ng-redux';
import * as import69 from '@angular/core/src/i18n/tokens';
import * as import70 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import71 from '@angular/platform-browser/src/dom/animation_driver';
import * as import72 from '@angular/core/src/render/api';
import * as import73 from '@angular/core/src/security';
import * as import74 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import75 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import76 from '@angular/http/src/interfaces';
import * as import77 from '@angular/http/src/http';
import * as import78 from '@angular/router/src/router_config_loader';
import * as import79 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import80 from '@angular/router/src/router_state';
class MainModuleInjector extends import0.NgModuleInjector<import1.MainModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _ROUTER_FORROOT_GUARD_3:any;
  _RouterModule_4:import5.RouterModule;
  _InternalFormsSharedModule_5:import6.InternalFormsSharedModule;
  _FormsModule_6:import7.FormsModule;
  _ReactiveFormsModule_7:import7.ReactiveFormsModule;
  _HttpModule_8:import8.HttpModule;
  _SharedModule_9:import9.SharedModule;
  _CoreModule_10:import10.CoreModule;
  _ProductsModule_11:import11.ProductsModule;
  _OrderModule_12:import12.OrderModule;
  _AppModule_13:import13.AppModule;
  _NgReduxModule_14:import14.NgReduxModule;
  _ErrorHandler_15:any;
  _ApplicationInitStatus_16:import15.ApplicationInitStatus;
  _Testability_17:import16.Testability;
  _ApplicationRef__18:import17.ApplicationRef_;
  _ApplicationRef_19:any;
  _NgRedux_20:any;
  _DevToolsExtension_21:import18.DevToolsExtension;
  _RootReducer_22:any;
  _MainModule_23:import1.MainModule;
  __LOCALE_ID_24:any;
  __NgLocalization_25:import19.NgLocaleLocalization;
  __Compiler_26:import20.Compiler;
  __APP_ID_27:any;
  __DOCUMENT_28:any;
  __HAMMER_GESTURE_CONFIG_29:import21.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_30:any[];
  __EventManager_31:import22.EventManager;
  __DomSharedStylesHost_32:import23.DomSharedStylesHost;
  __AnimationDriver_33:any;
  __DomRootRenderer_34:import24.DomRootRenderer_;
  __RootRenderer_35:any;
  __DomSanitizer_36:import25.DomSanitizerImpl;
  __Sanitizer_37:any;
  __ViewUtils_38:import26.ViewUtils;
  __IterableDiffers_39:any;
  __KeyValueDiffers_40:any;
  __SharedStylesHost_41:any;
  __Title_42:import27.Title;
  __RadioControlRegistry_43:import28.RadioControlRegistry;
  __FormBuilder_44:import29.FormBuilder;
  __BrowserXhr_45:import30.BrowserXhr;
  __ResponseOptions_46:import31.BaseResponseOptions;
  __XSRFStrategy_47:any;
  __XHRBackend_48:import32.XHRBackend;
  __RequestOptions_49:import33.BaseRequestOptions;
  __Http_50:any;
  __APP_SETTINGS_51:any;
  __RestService_52:import34.RestService;
  __ROUTES_53:any[];
  __ProductsActions_54:import35.ProductsActions;
  __OrderActions_55:import36.OrderActions;
  __ROUTER_CONFIGURATION_56:any;
  __LocationStrategy_57:any;
  __Location_58:import37.Location;
  __UrlSerializer_59:import38.DefaultUrlSerializer;
  __RouterOutletMap_60:import39.RouterOutletMap;
  __NgModuleFactoryLoader_61:import40.SystemJsNgModuleLoader;
  __Router_62:any;
  __ActivatedRoute_63:any;
  _NoPreloading_64:import41.NoPreloading;
  _PreloadingStrategy_65:any;
  _RouterPreloader_66:import41.RouterPreloader;
  __PreloadAllModules_67:import41.PreloadAllModules;
  __APP_BOOTSTRAP_LISTENER_68:any[];
  constructor(parent:import42.Injector) {
    super(parent,[
      import43.ProductsPageComponentNgFactory,
      import44.NewProductPageComponentNgFactory,
      import45.EditProductPageComponentNgFactory,
      import46.OrderPageComponentNgFactory,
      import47.HomeComponentNgFactory,
      import48.NotFoundComponentNgFactory,
      import49.AppComponentNgFactory
    ]
    ,[import49.AppComponentNgFactory]);
  }
  get _LOCALE_ID_24():any {
    if ((this.__LOCALE_ID_24 == (null as any))) { (this.__LOCALE_ID_24 = 'en-US'); }
    return this.__LOCALE_ID_24;
  }
  get _NgLocalization_25():import19.NgLocaleLocalization {
    if ((this.__NgLocalization_25 == (null as any))) { (this.__NgLocalization_25 = new import19.NgLocaleLocalization(this._LOCALE_ID_24)); }
    return this.__NgLocalization_25;
  }
  get _Compiler_26():import20.Compiler {
    if ((this.__Compiler_26 == (null as any))) { (this.__Compiler_26 = new import20.Compiler()); }
    return this.__Compiler_26;
  }
  get _APP_ID_27():any {
    if ((this.__APP_ID_27 == (null as any))) { (this.__APP_ID_27 = import50._appIdRandomProviderFactory()); }
    return this.__APP_ID_27;
  }
  get _DOCUMENT_28():any {
    if ((this.__DOCUMENT_28 == (null as any))) { (this.__DOCUMENT_28 = import4._document()); }
    return this.__DOCUMENT_28;
  }
  get _HAMMER_GESTURE_CONFIG_29():import21.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_29 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_29 = new import21.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_29;
  }
  get _EVENT_MANAGER_PLUGINS_30():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_30 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_30 = [
      new import51.DomEventsPlugin(),
      new import52.KeyEventsPlugin(),
      new import21.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_29)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_30;
  }
  get _EventManager_31():import22.EventManager {
    if ((this.__EventManager_31 == (null as any))) { (this.__EventManager_31 = new import22.EventManager(this._EVENT_MANAGER_PLUGINS_30,this.parent.get(import53.NgZone))); }
    return this.__EventManager_31;
  }
  get _DomSharedStylesHost_32():import23.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_32 == (null as any))) { (this.__DomSharedStylesHost_32 = new import23.DomSharedStylesHost(this._DOCUMENT_28)); }
    return this.__DomSharedStylesHost_32;
  }
  get _AnimationDriver_33():any {
    if ((this.__AnimationDriver_33 == (null as any))) { (this.__AnimationDriver_33 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_33;
  }
  get _DomRootRenderer_34():import24.DomRootRenderer_ {
    if ((this.__DomRootRenderer_34 == (null as any))) { (this.__DomRootRenderer_34 = new import24.DomRootRenderer_(this._DOCUMENT_28,this._EventManager_31,this._DomSharedStylesHost_32,this._AnimationDriver_33)); }
    return this.__DomRootRenderer_34;
  }
  get _RootRenderer_35():any {
    if ((this.__RootRenderer_35 == (null as any))) { (this.__RootRenderer_35 = import54._createConditionalRootRenderer(this._DomRootRenderer_34,this.parent.get(import54.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_35;
  }
  get _DomSanitizer_36():import25.DomSanitizerImpl {
    if ((this.__DomSanitizer_36 == (null as any))) { (this.__DomSanitizer_36 = new import25.DomSanitizerImpl()); }
    return this.__DomSanitizer_36;
  }
  get _Sanitizer_37():any {
    if ((this.__Sanitizer_37 == (null as any))) { (this.__Sanitizer_37 = this._DomSanitizer_36); }
    return this.__Sanitizer_37;
  }
  get _ViewUtils_38():import26.ViewUtils {
    if ((this.__ViewUtils_38 == (null as any))) { (this.__ViewUtils_38 = new import26.ViewUtils(this._RootRenderer_35,this._APP_ID_27,this._Sanitizer_37)); }
    return this.__ViewUtils_38;
  }
  get _IterableDiffers_39():any {
    if ((this.__IterableDiffers_39 == (null as any))) { (this.__IterableDiffers_39 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_39;
  }
  get _KeyValueDiffers_40():any {
    if ((this.__KeyValueDiffers_40 == (null as any))) { (this.__KeyValueDiffers_40 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_40;
  }
  get _SharedStylesHost_41():any {
    if ((this.__SharedStylesHost_41 == (null as any))) { (this.__SharedStylesHost_41 = this._DomSharedStylesHost_32); }
    return this.__SharedStylesHost_41;
  }
  get _Title_42():import27.Title {
    if ((this.__Title_42 == (null as any))) { (this.__Title_42 = new import27.Title()); }
    return this.__Title_42;
  }
  get _RadioControlRegistry_43():import28.RadioControlRegistry {
    if ((this.__RadioControlRegistry_43 == (null as any))) { (this.__RadioControlRegistry_43 = new import28.RadioControlRegistry()); }
    return this.__RadioControlRegistry_43;
  }
  get _FormBuilder_44():import29.FormBuilder {
    if ((this.__FormBuilder_44 == (null as any))) { (this.__FormBuilder_44 = new import29.FormBuilder()); }
    return this.__FormBuilder_44;
  }
  get _BrowserXhr_45():import30.BrowserXhr {
    if ((this.__BrowserXhr_45 == (null as any))) { (this.__BrowserXhr_45 = new import30.BrowserXhr()); }
    return this.__BrowserXhr_45;
  }
  get _ResponseOptions_46():import31.BaseResponseOptions {
    if ((this.__ResponseOptions_46 == (null as any))) { (this.__ResponseOptions_46 = new import31.BaseResponseOptions()); }
    return this.__ResponseOptions_46;
  }
  get _XSRFStrategy_47():any {
    if ((this.__XSRFStrategy_47 == (null as any))) { (this.__XSRFStrategy_47 = import8._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_47;
  }
  get _XHRBackend_48():import32.XHRBackend {
    if ((this.__XHRBackend_48 == (null as any))) { (this.__XHRBackend_48 = new import32.XHRBackend(this._BrowserXhr_45,this._ResponseOptions_46,this._XSRFStrategy_47)); }
    return this.__XHRBackend_48;
  }
  get _RequestOptions_49():import33.BaseRequestOptions {
    if ((this.__RequestOptions_49 == (null as any))) { (this.__RequestOptions_49 = new import33.BaseRequestOptions()); }
    return this.__RequestOptions_49;
  }
  get _Http_50():any {
    if ((this.__Http_50 == (null as any))) { (this.__Http_50 = import8.httpFactory(this._XHRBackend_48,this._RequestOptions_49)); }
    return this.__Http_50;
  }
  get _APP_SETTINGS_51():any {
    if ((this.__APP_SETTINGS_51 == (null as any))) { (this.__APP_SETTINGS_51 = import55.settings); }
    return this.__APP_SETTINGS_51;
  }
  get _RestService_52():import34.RestService {
    if ((this.__RestService_52 == (null as any))) { (this.__RestService_52 = new import34.RestService(this._Http_50,this._APP_SETTINGS_51)); }
    return this.__RestService_52;
  }
  get _ROUTES_53():any[] {
    if ((this.__ROUTES_53 == (null as any))) { (this.__ROUTES_53 = [
      [
        {
          path: 'products',
          component: import56.ProductsPageComponent
        }
        ,
        {
          path: 'products/new',
          component: import57.NewProductPageComponent
        }
        ,
        {
          path: 'products/:id',
          component: import58.EditProductPageComponent
        }

      ]
      ,
        [{
          path: 'order',
          component: import59.OrderPageComponent
        }
      ],
      [
        {
          path: '',
          component: import60.HomeComponent
        }
        ,
        {
          path: '**',
          component: import61.NotFoundComponent
        }

      ]

    ]
    ); }
    return this.__ROUTES_53;
  }
  get _ProductsActions_54():import35.ProductsActions {
    if ((this.__ProductsActions_54 == (null as any))) { (this.__ProductsActions_54 = new import35.ProductsActions(this._RestService_52)); }
    return this.__ProductsActions_54;
  }
  get _OrderActions_55():import36.OrderActions {
    if ((this.__OrderActions_55 == (null as any))) { (this.__OrderActions_55 = new import36.OrderActions(this._RestService_52)); }
    return this.__OrderActions_55;
  }
  get _ROUTER_CONFIGURATION_56():any {
    if ((this.__ROUTER_CONFIGURATION_56 == (null as any))) { (this.__ROUTER_CONFIGURATION_56 = {useHash: true}); }
    return this.__ROUTER_CONFIGURATION_56;
  }
  get _LocationStrategy_57():any {
    if ((this.__LocationStrategy_57 == (null as any))) { (this.__LocationStrategy_57 = import5.provideLocationStrategy(this.parent.get(import62.PlatformLocation),this.parent.get(import63.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_56)); }
    return this.__LocationStrategy_57;
  }
  get _Location_58():import37.Location {
    if ((this.__Location_58 == (null as any))) { (this.__Location_58 = new import37.Location(this._LocationStrategy_57)); }
    return this.__Location_58;
  }
  get _UrlSerializer_59():import38.DefaultUrlSerializer {
    if ((this.__UrlSerializer_59 == (null as any))) { (this.__UrlSerializer_59 = new import38.DefaultUrlSerializer()); }
    return this.__UrlSerializer_59;
  }
  get _RouterOutletMap_60():import39.RouterOutletMap {
    if ((this.__RouterOutletMap_60 == (null as any))) { (this.__RouterOutletMap_60 = new import39.RouterOutletMap()); }
    return this.__RouterOutletMap_60;
  }
  get _NgModuleFactoryLoader_61():import40.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_61 == (null as any))) { (this.__NgModuleFactoryLoader_61 = new import40.SystemJsNgModuleLoader(this._Compiler_26,this.parent.get(import40.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_61;
  }
  get _Router_62():any {
    if ((this.__Router_62 == (null as any))) { (this.__Router_62 = import5.setupRouter(this._ApplicationRef_19,this._UrlSerializer_59,this._RouterOutletMap_60,this._Location_58,this,this._NgModuleFactoryLoader_61,this._Compiler_26,this._ROUTES_53,this._ROUTER_CONFIGURATION_56)); }
    return this.__Router_62;
  }
  get _ActivatedRoute_63():any {
    if ((this.__ActivatedRoute_63 == (null as any))) { (this.__ActivatedRoute_63 = import5.rootRoute(this._Router_62)); }
    return this.__ActivatedRoute_63;
  }
  get _PreloadAllModules_67():import41.PreloadAllModules {
    if ((this.__PreloadAllModules_67 == (null as any))) { (this.__PreloadAllModules_67 = new import41.PreloadAllModules()); }
    return this.__PreloadAllModules_67;
  }
  get _APP_BOOTSTRAP_LISTENER_68():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_68 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_68 = [import5.initialRouterNavigation(this._Router_62,this._ApplicationRef_19,this._RouterPreloader_66,this._ROUTER_CONFIGURATION_56)]); }
    return this.__APP_BOOTSTRAP_LISTENER_68;
  }
  createInternal():import1.MainModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import64.Router,(null as any)));
    this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
    this._InternalFormsSharedModule_5 = new import6.InternalFormsSharedModule();
    this._FormsModule_6 = new import7.FormsModule();
    this._ReactiveFormsModule_7 = new import7.ReactiveFormsModule();
    this._HttpModule_8 = new import8.HttpModule();
    this._SharedModule_9 = new import9.SharedModule();
    this._CoreModule_10 = new import10.CoreModule(this.parent.get(import10.CoreModule,(null as any)));
    this._ProductsModule_11 = new import11.ProductsModule();
    this._OrderModule_12 = new import12.OrderModule();
    this._AppModule_13 = new import13.AppModule();
    this._NgReduxModule_14 = new import14.NgReduxModule();
    this._ErrorHandler_15 = import4.errorHandler();
    this._ApplicationInitStatus_16 = new import15.ApplicationInitStatus(this.parent.get(import15.APP_INITIALIZER,(null as any)));
    this._Testability_17 = new import16.Testability(this.parent.get(import53.NgZone));
    this._ApplicationRef__18 = new import17.ApplicationRef_(this.parent.get(import53.NgZone),this.parent.get(import65.Console),this,this._ErrorHandler_15,this,this._ApplicationInitStatus_16,this.parent.get(import16.TestabilityRegistry,(null as any)),this._Testability_17);
    this._ApplicationRef_19 = this._ApplicationRef__18;
    this._NgRedux_20 = import14._ngReduxFactory();
    this._DevToolsExtension_21 = new import18.DevToolsExtension(this._ApplicationRef_19,this._NgRedux_20);
    this._RootReducer_22 = import66.rootReducer();
    this._MainModule_23 = new import1.MainModule(this._ApplicationRef_19,this._NgRedux_20,this._DevToolsExtension_21,this.parent.get(import53.NgZone),this._RootReducer_22);
    this._NoPreloading_64 = new import41.NoPreloading();
    this._PreloadingStrategy_65 = this._NoPreloading_64;
    this._RouterPreloader_66 = new import41.RouterPreloader(this._Router_62,this._NgModuleFactoryLoader_61,this._Compiler_26,this,this._PreloadingStrategy_65);
    return this._MainModule_23;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_3; }
    if ((token === import5.RouterModule)) { return this._RouterModule_4; }
    if ((token === import6.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_5; }
    if ((token === import7.FormsModule)) { return this._FormsModule_6; }
    if ((token === import7.ReactiveFormsModule)) { return this._ReactiveFormsModule_7; }
    if ((token === import8.HttpModule)) { return this._HttpModule_8; }
    if ((token === import9.SharedModule)) { return this._SharedModule_9; }
    if ((token === import10.CoreModule)) { return this._CoreModule_10; }
    if ((token === import11.ProductsModule)) { return this._ProductsModule_11; }
    if ((token === import12.OrderModule)) { return this._OrderModule_12; }
    if ((token === import13.AppModule)) { return this._AppModule_13; }
    if ((token === import14.NgReduxModule)) { return this._NgReduxModule_14; }
    if ((token === import67.ErrorHandler)) { return this._ErrorHandler_15; }
    if ((token === import15.ApplicationInitStatus)) { return this._ApplicationInitStatus_16; }
    if ((token === import16.Testability)) { return this._Testability_17; }
    if ((token === import17.ApplicationRef_)) { return this._ApplicationRef__18; }
    if ((token === import17.ApplicationRef)) { return this._ApplicationRef_19; }
    if ((token === import68.NgRedux)) { return this._NgRedux_20; }
    if ((token === import18.DevToolsExtension)) { return this._DevToolsExtension_21; }
    if ((token === import66.RootReducer)) { return this._RootReducer_22; }
    if ((token === import1.MainModule)) { return this._MainModule_23; }
    if ((token === import69.LOCALE_ID)) { return this._LOCALE_ID_24; }
    if ((token === import19.NgLocalization)) { return this._NgLocalization_25; }
    if ((token === import20.Compiler)) { return this._Compiler_26; }
    if ((token === import50.APP_ID)) { return this._APP_ID_27; }
    if ((token === import70.DOCUMENT)) { return this._DOCUMENT_28; }
    if ((token === import21.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_29; }
    if ((token === import22.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_30; }
    if ((token === import22.EventManager)) { return this._EventManager_31; }
    if ((token === import23.DomSharedStylesHost)) { return this._DomSharedStylesHost_32; }
    if ((token === import71.AnimationDriver)) { return this._AnimationDriver_33; }
    if ((token === import24.DomRootRenderer)) { return this._DomRootRenderer_34; }
    if ((token === import72.RootRenderer)) { return this._RootRenderer_35; }
    if ((token === import25.DomSanitizer)) { return this._DomSanitizer_36; }
    if ((token === import73.Sanitizer)) { return this._Sanitizer_37; }
    if ((token === import26.ViewUtils)) { return this._ViewUtils_38; }
    if ((token === import74.IterableDiffers)) { return this._IterableDiffers_39; }
    if ((token === import75.KeyValueDiffers)) { return this._KeyValueDiffers_40; }
    if ((token === import23.SharedStylesHost)) { return this._SharedStylesHost_41; }
    if ((token === import27.Title)) { return this._Title_42; }
    if ((token === import28.RadioControlRegistry)) { return this._RadioControlRegistry_43; }
    if ((token === import29.FormBuilder)) { return this._FormBuilder_44; }
    if ((token === import30.BrowserXhr)) { return this._BrowserXhr_45; }
    if ((token === import31.ResponseOptions)) { return this._ResponseOptions_46; }
    if ((token === import76.XSRFStrategy)) { return this._XSRFStrategy_47; }
    if ((token === import32.XHRBackend)) { return this._XHRBackend_48; }
    if ((token === import33.RequestOptions)) { return this._RequestOptions_49; }
    if ((token === import77.Http)) { return this._Http_50; }
    if ((token === import55.APP_SETTINGS)) { return this._APP_SETTINGS_51; }
    if ((token === import34.RestService)) { return this._RestService_52; }
    if ((token === import78.ROUTES)) { return this._ROUTES_53; }
    if ((token === import35.ProductsActions)) { return this._ProductsActions_54; }
    if ((token === import36.OrderActions)) { return this._OrderActions_55; }
    if ((token === import5.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_56; }
    if ((token === import63.LocationStrategy)) { return this._LocationStrategy_57; }
    if ((token === import37.Location)) { return this._Location_58; }
    if ((token === import38.UrlSerializer)) { return this._UrlSerializer_59; }
    if ((token === import39.RouterOutletMap)) { return this._RouterOutletMap_60; }
    if ((token === import79.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_61; }
    if ((token === import64.Router)) { return this._Router_62; }
    if ((token === import80.ActivatedRoute)) { return this._ActivatedRoute_63; }
    if ((token === import41.NoPreloading)) { return this._NoPreloading_64; }
    if ((token === import41.PreloadingStrategy)) { return this._PreloadingStrategy_65; }
    if ((token === import41.RouterPreloader)) { return this._RouterPreloader_66; }
    if ((token === import41.PreloadAllModules)) { return this._PreloadAllModules_67; }
    if ((token === import50.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_68; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__18.ngOnDestroy();
    this._RouterPreloader_66.ngOnDestroy();
  }
}
export const MainModuleNgFactory:import0.NgModuleFactory<import1.MainModule> = new import0.NgModuleFactory(MainModuleInjector,import1.MainModule);