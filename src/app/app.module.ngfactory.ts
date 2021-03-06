/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from './core/core.module';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '@angular/core/src/application_module';
import * as import6 from '@angular/platform-browser/src/browser';
import * as import7 from '@angular/forms/src/directives';
import * as import8 from '@angular/forms/src/form_providers';
import * as import9 from '@angular/http/src/http_module';
import * as import10 from './shared/shared.module';
import * as import11 from './products/products.module';
import * as import12 from './order/order.module';
import * as import13 from '@angular/http/src/backends/browser_xhr';
import * as import14 from '@angular/http/src/base_response_options';
import * as import15 from '@angular/http/src/backends/xhr_backend';
import * as import16 from '@angular/http/src/base_request_options';
import * as import17 from './core/rest.service';
import * as import18 from '@angular/common/src/localization';
import * as import19 from '@angular/core/src/application_init';
import * as import20 from '@angular/core/src/testability/testability';
import * as import21 from '@angular/core/src/application_ref';
import * as import22 from '@angular/core/src/linker/compiler';
import * as import23 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import24 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import25 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import26 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import27 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import28 from '@angular/core/src/linker/view_utils';
import * as import29 from '@angular/platform-browser/src/browser/title';
import * as import30 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import31 from '@angular/forms/src/form_builder';
import * as import32 from './products/backend/products/products.actions';
import * as import33 from './order/backend/order/order.actions';
import * as import34 from '@angular/common/src/location/location';
import * as import35 from '@angular/router/src/url_tree';
import * as import36 from '@angular/router/src/router_outlet_map';
import * as import37 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import38 from '@angular/router/src/router_preloader';
import * as import39 from '@angular/core/src/di/injector';
import * as import40 from './products/products-page/products-page.component.ngfactory';
import * as import41 from './products/new-product-page/new-product-page.component.ngfactory';
import * as import42 from './products/edit-product-page/edit-product-page.component.ngfactory';
import * as import43 from './order/order-page/order-page.component.ngfactory';
import * as import44 from './home/home.component.ngfactory';
import * as import45 from './not-found/not-found.component.ngfactory';
import * as import46 from './settings';
import * as import47 from '@angular/core/src/application_tokens';
import * as import48 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import49 from '@angular/platform-browser/src/dom/events/key_events';
import * as import50 from '@angular/core/src/zone/ng_zone';
import * as import51 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import52 from './products/products-page/products-page.component';
import * as import53 from './products/new-product-page/new-product-page.component';
import * as import54 from './products/edit-product-page/edit-product-page.component';
import * as import55 from './order/order-page/order-page.component';
import * as import56 from './home/home.component';
import * as import57 from './not-found/not-found.component';
import * as import58 from '@angular/common/src/location/platform_location';
import * as import59 from '@angular/common/src/location/location_strategy';
import * as import60 from '@angular/router/src/router';
import * as import61 from '@angular/core/src/console';
import * as import62 from '@angular/http/src/interfaces';
import * as import63 from '@angular/http/src/http';
import * as import64 from '@angular/core/src/i18n/tokens';
import * as import65 from '@angular/core/src/error_handler';
import * as import66 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import67 from '@angular/platform-browser/src/dom/animation_driver';
import * as import68 from '@angular/core/src/render/api';
import * as import69 from '@angular/core/src/security';
import * as import70 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import71 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import72 from '@angular/router/src/router_config_loader';
import * as import73 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import74 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _ROUTER_FORROOT_GUARD_0:any;
  _RouterModule_1:import2.RouterModule;
  _CoreModule_2:import3.CoreModule;
  _CommonModule_3:import4.CommonModule;
  _ApplicationModule_4:import5.ApplicationModule;
  _BrowserModule_5:import6.BrowserModule;
  _InternalFormsSharedModule_6:import7.InternalFormsSharedModule;
  _FormsModule_7:import8.FormsModule;
  _ReactiveFormsModule_8:import8.ReactiveFormsModule;
  _HttpModule_9:import9.HttpModule;
  _SharedModule_10:import10.SharedModule;
  _ProductsModule_11:import11.ProductsModule;
  _OrderModule_12:import12.OrderModule;
  _AppModule_13:import1.AppModule;
  __BrowserXhr_14:import13.BrowserXhr;
  __ResponseOptions_15:import14.BaseResponseOptions;
  __XSRFStrategy_16:any;
  __XHRBackend_17:import15.XHRBackend;
  __RequestOptions_18:import16.BaseRequestOptions;
  __Http_19:any;
  __APP_SETTINGS_20:any;
  __RestService_21:import17.RestService;
  __LOCALE_ID_22:any;
  __NgLocalization_23:import18.NgLocaleLocalization;
  _ErrorHandler_24:any;
  _ApplicationInitStatus_25:import19.ApplicationInitStatus;
  _Testability_26:import20.Testability;
  _ApplicationRef__27:import21.ApplicationRef_;
  __ApplicationRef_28:any;
  __Compiler_29:import22.Compiler;
  __APP_ID_30:any;
  __DOCUMENT_31:any;
  __HAMMER_GESTURE_CONFIG_32:import23.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_33:any[];
  __EventManager_34:import24.EventManager;
  __DomSharedStylesHost_35:import25.DomSharedStylesHost;
  __AnimationDriver_36:any;
  __DomRootRenderer_37:import26.DomRootRenderer_;
  __RootRenderer_38:any;
  __DomSanitizer_39:import27.DomSanitizerImpl;
  __Sanitizer_40:any;
  __ViewUtils_41:import28.ViewUtils;
  __IterableDiffers_42:any;
  __KeyValueDiffers_43:any;
  __SharedStylesHost_44:any;
  __Title_45:import29.Title;
  __RadioControlRegistry_46:import30.RadioControlRegistry;
  __FormBuilder_47:import31.FormBuilder;
  __ROUTES_48:any[];
  __ProductsActions_49:import32.ProductsActions;
  __OrderActions_50:import33.OrderActions;
  __ROUTER_CONFIGURATION_51:any;
  __LocationStrategy_52:any;
  __Location_53:import34.Location;
  __UrlSerializer_54:import35.DefaultUrlSerializer;
  __RouterOutletMap_55:import36.RouterOutletMap;
  __NgModuleFactoryLoader_56:import37.SystemJsNgModuleLoader;
  __Router_57:any;
  __ActivatedRoute_58:any;
  _NoPreloading_59:import38.NoPreloading;
  _PreloadingStrategy_60:any;
  _RouterPreloader_61:import38.RouterPreloader;
  __PreloadAllModules_62:import38.PreloadAllModules;
  __APP_BOOTSTRAP_LISTENER_63:any[];
  constructor(parent:import39.Injector) {
    super(parent,[
      import40.ProductsPageComponentNgFactory,
      import41.NewProductPageComponentNgFactory,
      import42.EditProductPageComponentNgFactory,
      import43.OrderPageComponentNgFactory,
      import44.HomeComponentNgFactory,
      import45.NotFoundComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _BrowserXhr_14():import13.BrowserXhr {
    if ((this.__BrowserXhr_14 == (null as any))) { (this.__BrowserXhr_14 = new import13.BrowserXhr()); }
    return this.__BrowserXhr_14;
  }
  get _ResponseOptions_15():import14.BaseResponseOptions {
    if ((this.__ResponseOptions_15 == (null as any))) { (this.__ResponseOptions_15 = new import14.BaseResponseOptions()); }
    return this.__ResponseOptions_15;
  }
  get _XSRFStrategy_16():any {
    if ((this.__XSRFStrategy_16 == (null as any))) { (this.__XSRFStrategy_16 = import9._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_16;
  }
  get _XHRBackend_17():import15.XHRBackend {
    if ((this.__XHRBackend_17 == (null as any))) { (this.__XHRBackend_17 = new import15.XHRBackend(this._BrowserXhr_14,this._ResponseOptions_15,this._XSRFStrategy_16)); }
    return this.__XHRBackend_17;
  }
  get _RequestOptions_18():import16.BaseRequestOptions {
    if ((this.__RequestOptions_18 == (null as any))) { (this.__RequestOptions_18 = new import16.BaseRequestOptions()); }
    return this.__RequestOptions_18;
  }
  get _Http_19():any {
    if ((this.__Http_19 == (null as any))) { (this.__Http_19 = import9.httpFactory(this._XHRBackend_17,this._RequestOptions_18)); }
    return this.__Http_19;
  }
  get _APP_SETTINGS_20():any {
    if ((this.__APP_SETTINGS_20 == (null as any))) { (this.__APP_SETTINGS_20 = import46.settings); }
    return this.__APP_SETTINGS_20;
  }
  get _RestService_21():import17.RestService {
    if ((this.__RestService_21 == (null as any))) { (this.__RestService_21 = new import17.RestService(this._Http_19,this._APP_SETTINGS_20)); }
    return this.__RestService_21;
  }
  get _LOCALE_ID_22():any {
    if ((this.__LOCALE_ID_22 == (null as any))) { (this.__LOCALE_ID_22 = 'en-US'); }
    return this.__LOCALE_ID_22;
  }
  get _NgLocalization_23():import18.NgLocaleLocalization {
    if ((this.__NgLocalization_23 == (null as any))) { (this.__NgLocalization_23 = new import18.NgLocaleLocalization(this._LOCALE_ID_22)); }
    return this.__NgLocalization_23;
  }
  get _ApplicationRef_28():any {
    if ((this.__ApplicationRef_28 == (null as any))) { (this.__ApplicationRef_28 = this._ApplicationRef__27); }
    return this.__ApplicationRef_28;
  }
  get _Compiler_29():import22.Compiler {
    if ((this.__Compiler_29 == (null as any))) { (this.__Compiler_29 = new import22.Compiler()); }
    return this.__Compiler_29;
  }
  get _APP_ID_30():any {
    if ((this.__APP_ID_30 == (null as any))) { (this.__APP_ID_30 = import47._appIdRandomProviderFactory()); }
    return this.__APP_ID_30;
  }
  get _DOCUMENT_31():any {
    if ((this.__DOCUMENT_31 == (null as any))) { (this.__DOCUMENT_31 = import6._document()); }
    return this.__DOCUMENT_31;
  }
  get _HAMMER_GESTURE_CONFIG_32():import23.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_32 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_32 = new import23.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_32;
  }
  get _EVENT_MANAGER_PLUGINS_33():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_33 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_33 = [
      new import48.DomEventsPlugin(),
      new import49.KeyEventsPlugin(),
      new import23.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_32)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_33;
  }
  get _EventManager_34():import24.EventManager {
    if ((this.__EventManager_34 == (null as any))) { (this.__EventManager_34 = new import24.EventManager(this._EVENT_MANAGER_PLUGINS_33,this.parent.get(import50.NgZone))); }
    return this.__EventManager_34;
  }
  get _DomSharedStylesHost_35():import25.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_35 == (null as any))) { (this.__DomSharedStylesHost_35 = new import25.DomSharedStylesHost(this._DOCUMENT_31)); }
    return this.__DomSharedStylesHost_35;
  }
  get _AnimationDriver_36():any {
    if ((this.__AnimationDriver_36 == (null as any))) { (this.__AnimationDriver_36 = import6._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_36;
  }
  get _DomRootRenderer_37():import26.DomRootRenderer_ {
    if ((this.__DomRootRenderer_37 == (null as any))) { (this.__DomRootRenderer_37 = new import26.DomRootRenderer_(this._DOCUMENT_31,this._EventManager_34,this._DomSharedStylesHost_35,this._AnimationDriver_36)); }
    return this.__DomRootRenderer_37;
  }
  get _RootRenderer_38():any {
    if ((this.__RootRenderer_38 == (null as any))) { (this.__RootRenderer_38 = import51._createConditionalRootRenderer(this._DomRootRenderer_37,this.parent.get(import51.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_38;
  }
  get _DomSanitizer_39():import27.DomSanitizerImpl {
    if ((this.__DomSanitizer_39 == (null as any))) { (this.__DomSanitizer_39 = new import27.DomSanitizerImpl()); }
    return this.__DomSanitizer_39;
  }
  get _Sanitizer_40():any {
    if ((this.__Sanitizer_40 == (null as any))) { (this.__Sanitizer_40 = this._DomSanitizer_39); }
    return this.__Sanitizer_40;
  }
  get _ViewUtils_41():import28.ViewUtils {
    if ((this.__ViewUtils_41 == (null as any))) { (this.__ViewUtils_41 = new import28.ViewUtils(this._RootRenderer_38,this._APP_ID_30,this._Sanitizer_40)); }
    return this.__ViewUtils_41;
  }
  get _IterableDiffers_42():any {
    if ((this.__IterableDiffers_42 == (null as any))) { (this.__IterableDiffers_42 = import5._iterableDiffersFactory()); }
    return this.__IterableDiffers_42;
  }
  get _KeyValueDiffers_43():any {
    if ((this.__KeyValueDiffers_43 == (null as any))) { (this.__KeyValueDiffers_43 = import5._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_43;
  }
  get _SharedStylesHost_44():any {
    if ((this.__SharedStylesHost_44 == (null as any))) { (this.__SharedStylesHost_44 = this._DomSharedStylesHost_35); }
    return this.__SharedStylesHost_44;
  }
  get _Title_45():import29.Title {
    if ((this.__Title_45 == (null as any))) { (this.__Title_45 = new import29.Title()); }
    return this.__Title_45;
  }
  get _RadioControlRegistry_46():import30.RadioControlRegistry {
    if ((this.__RadioControlRegistry_46 == (null as any))) { (this.__RadioControlRegistry_46 = new import30.RadioControlRegistry()); }
    return this.__RadioControlRegistry_46;
  }
  get _FormBuilder_47():import31.FormBuilder {
    if ((this.__FormBuilder_47 == (null as any))) { (this.__FormBuilder_47 = new import31.FormBuilder()); }
    return this.__FormBuilder_47;
  }
  get _ROUTES_48():any[] {
    if ((this.__ROUTES_48 == (null as any))) { (this.__ROUTES_48 = [
      [
        {
          path: 'products',
          component: import52.ProductsPageComponent
        }
        ,
        {
          path: 'products/new',
          component: import53.NewProductPageComponent
        }
        ,
        {
          path: 'products/:id',
          component: import54.EditProductPageComponent
        }

      ]
      ,
        [{
          path: 'order',
          component: import55.OrderPageComponent
        }
      ],
      [
        {
          path: '',
          component: import56.HomeComponent
        }
        ,
        {
          path: '**',
          component: import57.NotFoundComponent
        }

      ]

    ]
    ); }
    return this.__ROUTES_48;
  }
  get _ProductsActions_49():import32.ProductsActions {
    if ((this.__ProductsActions_49 == (null as any))) { (this.__ProductsActions_49 = new import32.ProductsActions(this._RestService_21)); }
    return this.__ProductsActions_49;
  }
  get _OrderActions_50():import33.OrderActions {
    if ((this.__OrderActions_50 == (null as any))) { (this.__OrderActions_50 = new import33.OrderActions(this._RestService_21)); }
    return this.__OrderActions_50;
  }
  get _ROUTER_CONFIGURATION_51():any {
    if ((this.__ROUTER_CONFIGURATION_51 == (null as any))) { (this.__ROUTER_CONFIGURATION_51 = {useHash: true}); }
    return this.__ROUTER_CONFIGURATION_51;
  }
  get _LocationStrategy_52():any {
    if ((this.__LocationStrategy_52 == (null as any))) { (this.__LocationStrategy_52 = import2.provideLocationStrategy(this.parent.get(import58.PlatformLocation),this.parent.get(import59.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_51)); }
    return this.__LocationStrategy_52;
  }
  get _Location_53():import34.Location {
    if ((this.__Location_53 == (null as any))) { (this.__Location_53 = new import34.Location(this._LocationStrategy_52)); }
    return this.__Location_53;
  }
  get _UrlSerializer_54():import35.DefaultUrlSerializer {
    if ((this.__UrlSerializer_54 == (null as any))) { (this.__UrlSerializer_54 = new import35.DefaultUrlSerializer()); }
    return this.__UrlSerializer_54;
  }
  get _RouterOutletMap_55():import36.RouterOutletMap {
    if ((this.__RouterOutletMap_55 == (null as any))) { (this.__RouterOutletMap_55 = new import36.RouterOutletMap()); }
    return this.__RouterOutletMap_55;
  }
  get _NgModuleFactoryLoader_56():import37.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_56 == (null as any))) { (this.__NgModuleFactoryLoader_56 = new import37.SystemJsNgModuleLoader(this._Compiler_29,this.parent.get(import37.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_56;
  }
  get _Router_57():any {
    if ((this.__Router_57 == (null as any))) { (this.__Router_57 = import2.setupRouter(this._ApplicationRef_28,this._UrlSerializer_54,this._RouterOutletMap_55,this._Location_53,this,this._NgModuleFactoryLoader_56,this._Compiler_29,this._ROUTES_48,this._ROUTER_CONFIGURATION_51)); }
    return this.__Router_57;
  }
  get _ActivatedRoute_58():any {
    if ((this.__ActivatedRoute_58 == (null as any))) { (this.__ActivatedRoute_58 = import2.rootRoute(this._Router_57)); }
    return this.__ActivatedRoute_58;
  }
  get _PreloadAllModules_62():import38.PreloadAllModules {
    if ((this.__PreloadAllModules_62 == (null as any))) { (this.__PreloadAllModules_62 = new import38.PreloadAllModules()); }
    return this.__PreloadAllModules_62;
  }
  get _APP_BOOTSTRAP_LISTENER_63():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_63 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_63 = [import2.initialRouterNavigation(this._Router_57,this._ApplicationRef_28,this._RouterPreloader_61,this._ROUTER_CONFIGURATION_51)]); }
    return this.__APP_BOOTSTRAP_LISTENER_63;
  }
  createInternal():import1.AppModule {
    this._ROUTER_FORROOT_GUARD_0 = import2.provideForRootGuard(this.parent.get(import60.Router,(null as any)));
    this._RouterModule_1 = new import2.RouterModule(this._ROUTER_FORROOT_GUARD_0);
    this._CoreModule_2 = new import3.CoreModule(this.parent.get(import3.CoreModule,(null as any)));
    this._CommonModule_3 = new import4.CommonModule();
    this._ApplicationModule_4 = new import5.ApplicationModule();
    this._BrowserModule_5 = new import6.BrowserModule(this.parent.get(import6.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_6 = new import7.InternalFormsSharedModule();
    this._FormsModule_7 = new import8.FormsModule();
    this._ReactiveFormsModule_8 = new import8.ReactiveFormsModule();
    this._HttpModule_9 = new import9.HttpModule();
    this._SharedModule_10 = new import10.SharedModule();
    this._ProductsModule_11 = new import11.ProductsModule();
    this._OrderModule_12 = new import12.OrderModule();
    this._AppModule_13 = new import1.AppModule();
    this._ErrorHandler_24 = import6.errorHandler();
    this._ApplicationInitStatus_25 = new import19.ApplicationInitStatus(this.parent.get(import19.APP_INITIALIZER,(null as any)));
    this._Testability_26 = new import20.Testability(this.parent.get(import50.NgZone));
    this._ApplicationRef__27 = new import21.ApplicationRef_(this.parent.get(import50.NgZone),this.parent.get(import61.Console),this,this._ErrorHandler_24,this,this._ApplicationInitStatus_25,this.parent.get(import20.TestabilityRegistry,(null as any)),this._Testability_26);
    this._NoPreloading_59 = new import38.NoPreloading();
    this._PreloadingStrategy_60 = this._NoPreloading_59;
    this._RouterPreloader_61 = new import38.RouterPreloader(this._Router_57,this._NgModuleFactoryLoader_56,this._Compiler_29,this,this._PreloadingStrategy_60);
    return this._AppModule_13;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_0; }
    if ((token === import2.RouterModule)) { return this._RouterModule_1; }
    if ((token === import3.CoreModule)) { return this._CoreModule_2; }
    if ((token === import4.CommonModule)) { return this._CommonModule_3; }
    if ((token === import5.ApplicationModule)) { return this._ApplicationModule_4; }
    if ((token === import6.BrowserModule)) { return this._BrowserModule_5; }
    if ((token === import7.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_6; }
    if ((token === import8.FormsModule)) { return this._FormsModule_7; }
    if ((token === import8.ReactiveFormsModule)) { return this._ReactiveFormsModule_8; }
    if ((token === import9.HttpModule)) { return this._HttpModule_9; }
    if ((token === import10.SharedModule)) { return this._SharedModule_10; }
    if ((token === import11.ProductsModule)) { return this._ProductsModule_11; }
    if ((token === import12.OrderModule)) { return this._OrderModule_12; }
    if ((token === import1.AppModule)) { return this._AppModule_13; }
    if ((token === import13.BrowserXhr)) { return this._BrowserXhr_14; }
    if ((token === import14.ResponseOptions)) { return this._ResponseOptions_15; }
    if ((token === import62.XSRFStrategy)) { return this._XSRFStrategy_16; }
    if ((token === import15.XHRBackend)) { return this._XHRBackend_17; }
    if ((token === import16.RequestOptions)) { return this._RequestOptions_18; }
    if ((token === import63.Http)) { return this._Http_19; }
    if ((token === import46.APP_SETTINGS)) { return this._APP_SETTINGS_20; }
    if ((token === import17.RestService)) { return this._RestService_21; }
    if ((token === import64.LOCALE_ID)) { return this._LOCALE_ID_22; }
    if ((token === import18.NgLocalization)) { return this._NgLocalization_23; }
    if ((token === import65.ErrorHandler)) { return this._ErrorHandler_24; }
    if ((token === import19.ApplicationInitStatus)) { return this._ApplicationInitStatus_25; }
    if ((token === import20.Testability)) { return this._Testability_26; }
    if ((token === import21.ApplicationRef_)) { return this._ApplicationRef__27; }
    if ((token === import21.ApplicationRef)) { return this._ApplicationRef_28; }
    if ((token === import22.Compiler)) { return this._Compiler_29; }
    if ((token === import47.APP_ID)) { return this._APP_ID_30; }
    if ((token === import66.DOCUMENT)) { return this._DOCUMENT_31; }
    if ((token === import23.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_32; }
    if ((token === import24.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_33; }
    if ((token === import24.EventManager)) { return this._EventManager_34; }
    if ((token === import25.DomSharedStylesHost)) { return this._DomSharedStylesHost_35; }
    if ((token === import67.AnimationDriver)) { return this._AnimationDriver_36; }
    if ((token === import26.DomRootRenderer)) { return this._DomRootRenderer_37; }
    if ((token === import68.RootRenderer)) { return this._RootRenderer_38; }
    if ((token === import27.DomSanitizer)) { return this._DomSanitizer_39; }
    if ((token === import69.Sanitizer)) { return this._Sanitizer_40; }
    if ((token === import28.ViewUtils)) { return this._ViewUtils_41; }
    if ((token === import70.IterableDiffers)) { return this._IterableDiffers_42; }
    if ((token === import71.KeyValueDiffers)) { return this._KeyValueDiffers_43; }
    if ((token === import25.SharedStylesHost)) { return this._SharedStylesHost_44; }
    if ((token === import29.Title)) { return this._Title_45; }
    if ((token === import30.RadioControlRegistry)) { return this._RadioControlRegistry_46; }
    if ((token === import31.FormBuilder)) { return this._FormBuilder_47; }
    if ((token === import72.ROUTES)) { return this._ROUTES_48; }
    if ((token === import32.ProductsActions)) { return this._ProductsActions_49; }
    if ((token === import33.OrderActions)) { return this._OrderActions_50; }
    if ((token === import2.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_51; }
    if ((token === import59.LocationStrategy)) { return this._LocationStrategy_52; }
    if ((token === import34.Location)) { return this._Location_53; }
    if ((token === import35.UrlSerializer)) { return this._UrlSerializer_54; }
    if ((token === import36.RouterOutletMap)) { return this._RouterOutletMap_55; }
    if ((token === import73.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_56; }
    if ((token === import60.Router)) { return this._Router_57; }
    if ((token === import74.ActivatedRoute)) { return this._ActivatedRoute_58; }
    if ((token === import38.NoPreloading)) { return this._NoPreloading_59; }
    if ((token === import38.PreloadingStrategy)) { return this._PreloadingStrategy_60; }
    if ((token === import38.RouterPreloader)) { return this._RouterPreloader_61; }
    if ((token === import38.PreloadAllModules)) { return this._PreloadAllModules_62; }
    if ((token === import47.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_63; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__27.ngOnDestroy();
    this._RouterPreloader_61.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);