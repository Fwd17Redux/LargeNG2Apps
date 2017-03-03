/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './order.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from '@angular/http/src/http_module';
import * as import9 from '../shared/shared.module';
import * as import10 from '@angular/common/src/localization';
import * as import11 from '@angular/core/src/application_init';
import * as import12 from '@angular/core/src/testability/testability';
import * as import13 from '@angular/core/src/application_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import16 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import17 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import18 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import23 from '@angular/forms/src/form_builder';
import * as import24 from '@angular/http/src/backends/browser_xhr';
import * as import25 from '@angular/http/src/base_response_options';
import * as import26 from '@angular/http/src/backends/xhr_backend';
import * as import27 from '@angular/http/src/base_request_options';
import * as import28 from './backend/order/order.actions';
import * as import29 from '@angular/core/src/di/injector';
import * as import30 from './order-page/order-page.component.ngfactory';
import * as import31 from '@angular/core/src/application_tokens';
import * as import32 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import33 from '@angular/platform-browser/src/dom/events/key_events';
import * as import34 from '@angular/core/src/zone/ng_zone';
import * as import35 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import36 from '../settings';
import * as import37 from './order-page/order-page.component';
import * as import38 from '../core/rest.service';
import * as import39 from '@angular/core/src/console';
import * as import40 from '@angular/core/src/i18n/tokens';
import * as import41 from '@angular/core/src/error_handler';
import * as import42 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import43 from '@angular/platform-browser/src/dom/animation_driver';
import * as import44 from '@angular/core/src/render/api';
import * as import45 from '@angular/core/src/security';
import * as import46 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import47 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import48 from '@angular/http/src/interfaces';
import * as import49 from '@angular/http/src/http';
import * as import50 from '@angular/router/src/router_config_loader';
class OrderModuleInjector extends import0.NgModuleInjector<import1.OrderModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _RouterModule_3:import5.RouterModule;
  _InternalFormsSharedModule_4:import6.InternalFormsSharedModule;
  _FormsModule_5:import7.FormsModule;
  _ReactiveFormsModule_6:import7.ReactiveFormsModule;
  _HttpModule_7:import8.HttpModule;
  _SharedModule_8:import9.SharedModule;
  _OrderModule_9:import1.OrderModule;
  __LOCALE_ID_10:any;
  __NgLocalization_11:import10.NgLocaleLocalization;
  _ErrorHandler_12:any;
  _ApplicationInitStatus_13:import11.ApplicationInitStatus;
  _Testability_14:import12.Testability;
  _ApplicationRef__15:import13.ApplicationRef_;
  __ApplicationRef_16:any;
  __Compiler_17:import14.Compiler;
  __APP_ID_18:any;
  __DOCUMENT_19:any;
  __HAMMER_GESTURE_CONFIG_20:import15.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_21:any[];
  __EventManager_22:import16.EventManager;
  __DomSharedStylesHost_23:import17.DomSharedStylesHost;
  __AnimationDriver_24:any;
  __DomRootRenderer_25:import18.DomRootRenderer_;
  __RootRenderer_26:any;
  __DomSanitizer_27:import19.DomSanitizerImpl;
  __Sanitizer_28:any;
  __ViewUtils_29:import20.ViewUtils;
  __IterableDiffers_30:any;
  __KeyValueDiffers_31:any;
  __SharedStylesHost_32:any;
  __Title_33:import21.Title;
  __RadioControlRegistry_34:import22.RadioControlRegistry;
  __FormBuilder_35:import23.FormBuilder;
  __BrowserXhr_36:import24.BrowserXhr;
  __ResponseOptions_37:import25.BaseResponseOptions;
  __XSRFStrategy_38:any;
  __XHRBackend_39:import26.XHRBackend;
  __RequestOptions_40:import27.BaseRequestOptions;
  __Http_41:any;
  __APP_SETTINGS_42:any;
  __ROUTES_43:any[];
  __OrderActions_44:import28.OrderActions;
  constructor(parent:import29.Injector) {
    super(parent,[import30.OrderPageComponentNgFactory],([] as any[]));
  }
  get _LOCALE_ID_10():any {
    if ((this.__LOCALE_ID_10 == (null as any))) { (this.__LOCALE_ID_10 = 'en-US'); }
    return this.__LOCALE_ID_10;
  }
  get _NgLocalization_11():import10.NgLocaleLocalization {
    if ((this.__NgLocalization_11 == (null as any))) { (this.__NgLocalization_11 = new import10.NgLocaleLocalization(this._LOCALE_ID_10)); }
    return this.__NgLocalization_11;
  }
  get _ApplicationRef_16():any {
    if ((this.__ApplicationRef_16 == (null as any))) { (this.__ApplicationRef_16 = this._ApplicationRef__15); }
    return this.__ApplicationRef_16;
  }
  get _Compiler_17():import14.Compiler {
    if ((this.__Compiler_17 == (null as any))) { (this.__Compiler_17 = new import14.Compiler()); }
    return this.__Compiler_17;
  }
  get _APP_ID_18():any {
    if ((this.__APP_ID_18 == (null as any))) { (this.__APP_ID_18 = import31._appIdRandomProviderFactory()); }
    return this.__APP_ID_18;
  }
  get _DOCUMENT_19():any {
    if ((this.__DOCUMENT_19 == (null as any))) { (this.__DOCUMENT_19 = import4._document()); }
    return this.__DOCUMENT_19;
  }
  get _HAMMER_GESTURE_CONFIG_20():import15.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_20 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_20 = new import15.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_20;
  }
  get _EVENT_MANAGER_PLUGINS_21():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_21 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_21 = [
      new import32.DomEventsPlugin(),
      new import33.KeyEventsPlugin(),
      new import15.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_20)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_21;
  }
  get _EventManager_22():import16.EventManager {
    if ((this.__EventManager_22 == (null as any))) { (this.__EventManager_22 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(import34.NgZone))); }
    return this.__EventManager_22;
  }
  get _DomSharedStylesHost_23():import17.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_23 == (null as any))) { (this.__DomSharedStylesHost_23 = new import17.DomSharedStylesHost(this._DOCUMENT_19)); }
    return this.__DomSharedStylesHost_23;
  }
  get _AnimationDriver_24():any {
    if ((this.__AnimationDriver_24 == (null as any))) { (this.__AnimationDriver_24 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_24;
  }
  get _DomRootRenderer_25():import18.DomRootRenderer_ {
    if ((this.__DomRootRenderer_25 == (null as any))) { (this.__DomRootRenderer_25 = new import18.DomRootRenderer_(this._DOCUMENT_19,this._EventManager_22,this._DomSharedStylesHost_23,this._AnimationDriver_24)); }
    return this.__DomRootRenderer_25;
  }
  get _RootRenderer_26():any {
    if ((this.__RootRenderer_26 == (null as any))) { (this.__RootRenderer_26 = import35._createConditionalRootRenderer(this._DomRootRenderer_25,this.parent.get(import35.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_26;
  }
  get _DomSanitizer_27():import19.DomSanitizerImpl {
    if ((this.__DomSanitizer_27 == (null as any))) { (this.__DomSanitizer_27 = new import19.DomSanitizerImpl()); }
    return this.__DomSanitizer_27;
  }
  get _Sanitizer_28():any {
    if ((this.__Sanitizer_28 == (null as any))) { (this.__Sanitizer_28 = this._DomSanitizer_27); }
    return this.__Sanitizer_28;
  }
  get _ViewUtils_29():import20.ViewUtils {
    if ((this.__ViewUtils_29 == (null as any))) { (this.__ViewUtils_29 = new import20.ViewUtils(this._RootRenderer_26,this._APP_ID_18,this._Sanitizer_28)); }
    return this.__ViewUtils_29;
  }
  get _IterableDiffers_30():any {
    if ((this.__IterableDiffers_30 == (null as any))) { (this.__IterableDiffers_30 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_30;
  }
  get _KeyValueDiffers_31():any {
    if ((this.__KeyValueDiffers_31 == (null as any))) { (this.__KeyValueDiffers_31 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_31;
  }
  get _SharedStylesHost_32():any {
    if ((this.__SharedStylesHost_32 == (null as any))) { (this.__SharedStylesHost_32 = this._DomSharedStylesHost_23); }
    return this.__SharedStylesHost_32;
  }
  get _Title_33():import21.Title {
    if ((this.__Title_33 == (null as any))) { (this.__Title_33 = new import21.Title()); }
    return this.__Title_33;
  }
  get _RadioControlRegistry_34():import22.RadioControlRegistry {
    if ((this.__RadioControlRegistry_34 == (null as any))) { (this.__RadioControlRegistry_34 = new import22.RadioControlRegistry()); }
    return this.__RadioControlRegistry_34;
  }
  get _FormBuilder_35():import23.FormBuilder {
    if ((this.__FormBuilder_35 == (null as any))) { (this.__FormBuilder_35 = new import23.FormBuilder()); }
    return this.__FormBuilder_35;
  }
  get _BrowserXhr_36():import24.BrowserXhr {
    if ((this.__BrowserXhr_36 == (null as any))) { (this.__BrowserXhr_36 = new import24.BrowserXhr()); }
    return this.__BrowserXhr_36;
  }
  get _ResponseOptions_37():import25.BaseResponseOptions {
    if ((this.__ResponseOptions_37 == (null as any))) { (this.__ResponseOptions_37 = new import25.BaseResponseOptions()); }
    return this.__ResponseOptions_37;
  }
  get _XSRFStrategy_38():any {
    if ((this.__XSRFStrategy_38 == (null as any))) { (this.__XSRFStrategy_38 = import8._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_38;
  }
  get _XHRBackend_39():import26.XHRBackend {
    if ((this.__XHRBackend_39 == (null as any))) { (this.__XHRBackend_39 = new import26.XHRBackend(this._BrowserXhr_36,this._ResponseOptions_37,this._XSRFStrategy_38)); }
    return this.__XHRBackend_39;
  }
  get _RequestOptions_40():import27.BaseRequestOptions {
    if ((this.__RequestOptions_40 == (null as any))) { (this.__RequestOptions_40 = new import27.BaseRequestOptions()); }
    return this.__RequestOptions_40;
  }
  get _Http_41():any {
    if ((this.__Http_41 == (null as any))) { (this.__Http_41 = import8.httpFactory(this._XHRBackend_39,this._RequestOptions_40)); }
    return this.__Http_41;
  }
  get _APP_SETTINGS_42():any {
    if ((this.__APP_SETTINGS_42 == (null as any))) { (this.__APP_SETTINGS_42 = import36.settings); }
    return this.__APP_SETTINGS_42;
  }
  get _ROUTES_43():any[] {
        if ((this.__ROUTES_43 == (null as any))) { (this.__ROUTES_43 = [[{
          path: 'order',
          component: import37.OrderPageComponent
        }
    ]]); }
    return this.__ROUTES_43;
  }
  get _OrderActions_44():import28.OrderActions {
    if ((this.__OrderActions_44 == (null as any))) { (this.__OrderActions_44 = new import28.OrderActions(this.parent.get(import38.RestService))); }
    return this.__OrderActions_44;
  }
  createInternal():import1.OrderModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._RouterModule_3 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD,(null as any)));
    this._InternalFormsSharedModule_4 = new import6.InternalFormsSharedModule();
    this._FormsModule_5 = new import7.FormsModule();
    this._ReactiveFormsModule_6 = new import7.ReactiveFormsModule();
    this._HttpModule_7 = new import8.HttpModule();
    this._SharedModule_8 = new import9.SharedModule();
    this._OrderModule_9 = new import1.OrderModule();
    this._ErrorHandler_12 = import4.errorHandler();
    this._ApplicationInitStatus_13 = new import11.ApplicationInitStatus(this.parent.get(import11.APP_INITIALIZER,(null as any)));
    this._Testability_14 = new import12.Testability(this.parent.get(import34.NgZone));
    this._ApplicationRef__15 = new import13.ApplicationRef_(this.parent.get(import34.NgZone),this.parent.get(import39.Console),this,this._ErrorHandler_12,this,this._ApplicationInitStatus_13,this.parent.get(import12.TestabilityRegistry,(null as any)),this._Testability_14);
    return this._OrderModule_9;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.RouterModule)) { return this._RouterModule_3; }
    if ((token === import6.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_4; }
    if ((token === import7.FormsModule)) { return this._FormsModule_5; }
    if ((token === import7.ReactiveFormsModule)) { return this._ReactiveFormsModule_6; }
    if ((token === import8.HttpModule)) { return this._HttpModule_7; }
    if ((token === import9.SharedModule)) { return this._SharedModule_8; }
    if ((token === import1.OrderModule)) { return this._OrderModule_9; }
    if ((token === import40.LOCALE_ID)) { return this._LOCALE_ID_10; }
    if ((token === import10.NgLocalization)) { return this._NgLocalization_11; }
    if ((token === import41.ErrorHandler)) { return this._ErrorHandler_12; }
    if ((token === import11.ApplicationInitStatus)) { return this._ApplicationInitStatus_13; }
    if ((token === import12.Testability)) { return this._Testability_14; }
    if ((token === import13.ApplicationRef_)) { return this._ApplicationRef__15; }
    if ((token === import13.ApplicationRef)) { return this._ApplicationRef_16; }
    if ((token === import14.Compiler)) { return this._Compiler_17; }
    if ((token === import31.APP_ID)) { return this._APP_ID_18; }
    if ((token === import42.DOCUMENT)) { return this._DOCUMENT_19; }
    if ((token === import15.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_20; }
    if ((token === import16.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_21; }
    if ((token === import16.EventManager)) { return this._EventManager_22; }
    if ((token === import17.DomSharedStylesHost)) { return this._DomSharedStylesHost_23; }
    if ((token === import43.AnimationDriver)) { return this._AnimationDriver_24; }
    if ((token === import18.DomRootRenderer)) { return this._DomRootRenderer_25; }
    if ((token === import44.RootRenderer)) { return this._RootRenderer_26; }
    if ((token === import19.DomSanitizer)) { return this._DomSanitizer_27; }
    if ((token === import45.Sanitizer)) { return this._Sanitizer_28; }
    if ((token === import20.ViewUtils)) { return this._ViewUtils_29; }
    if ((token === import46.IterableDiffers)) { return this._IterableDiffers_30; }
    if ((token === import47.KeyValueDiffers)) { return this._KeyValueDiffers_31; }
    if ((token === import17.SharedStylesHost)) { return this._SharedStylesHost_32; }
    if ((token === import21.Title)) { return this._Title_33; }
    if ((token === import22.RadioControlRegistry)) { return this._RadioControlRegistry_34; }
    if ((token === import23.FormBuilder)) { return this._FormBuilder_35; }
    if ((token === import24.BrowserXhr)) { return this._BrowserXhr_36; }
    if ((token === import25.ResponseOptions)) { return this._ResponseOptions_37; }
    if ((token === import48.XSRFStrategy)) { return this._XSRFStrategy_38; }
    if ((token === import26.XHRBackend)) { return this._XHRBackend_39; }
    if ((token === import27.RequestOptions)) { return this._RequestOptions_40; }
    if ((token === import49.Http)) { return this._Http_41; }
    if ((token === import36.APP_SETTINGS)) { return this._APP_SETTINGS_42; }
    if ((token === import50.ROUTES)) { return this._ROUTES_43; }
    if ((token === import28.OrderActions)) { return this._OrderActions_44; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__15.ngOnDestroy();
  }
}
export const OrderModuleNgFactory:import0.NgModuleFactory<import1.OrderModule> = new import0.NgModuleFactory(OrderModuleInjector,import1.OrderModule);