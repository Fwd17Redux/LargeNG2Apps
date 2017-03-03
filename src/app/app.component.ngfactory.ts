/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_link_active';
import * as import12 from '@angular/router/src/directives/router_link';
import * as import13 from '@angular/router/src/directives/router_outlet';
import * as import14 from '../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import17 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import18 from '@angular/router/src/router';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/router/src/router_state';
import * as import21 from '@angular/common/src/location/location_strategy';
import * as import22 from '@angular/router/src/router_outlet_map';
import * as import23 from '@angular/core/src/linker/component_factory_resolver';
export class Wrapper_AppComponent {
  context:import0.AppComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.AppComponent();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
const nodeDebugInfos_AppComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.AppComponent],import0.AppComponent,{})];
var renderType_AppComponent_Host:import3.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _AppComponent_0_4:Wrapper_AppComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AppComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'dcs-app',import5.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new Wrapper_AppComponent();
    this._appEl_0.initComponent(this._AppComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AppComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._AppComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AppComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import10.ComponentFactory<import0.AppComponent> = new import10.ComponentFactory<import0.AppComponent>('dcs-app',viewFactory_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
const nodeDebugInfos_AppComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import11.RouterLinkActive],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import12.RouterLinkWithHref],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import11.RouterLinkActive],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import12.RouterLinkWithHref],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import11.RouterLinkActive],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import12.RouterLinkWithHref],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import13.RouterOutlet],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_AppComponent:import3.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.DebugAppView<import0.AppComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _RouterLinkActive_8_3:import14.Wrapper_RouterLinkActive;
  _query_RouterLink_8_0:import15.QueryList<any>;
  _query_RouterLinkWithHref_8_1:import15.QueryList<any>;
  _text_9:any;
  _el_10:any;
  _RouterLinkWithHref_10_3:import16.Wrapper_RouterLinkWithHref;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _RouterLinkActive_14_3:import14.Wrapper_RouterLinkActive;
  _query_RouterLink_14_0:import15.QueryList<any>;
  _query_RouterLinkWithHref_14_1:import15.QueryList<any>;
  _text_15:any;
  _el_16:any;
  _RouterLinkWithHref_16_3:import16.Wrapper_RouterLinkWithHref;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _RouterLinkActive_20_3:import14.Wrapper_RouterLinkActive;
  _query_RouterLink_20_0:import15.QueryList<any>;
  _query_RouterLinkWithHref_20_1:import15.QueryList<any>;
  _text_21:any;
  _el_22:any;
  _RouterLinkWithHref_22_3:import16.Wrapper_RouterLinkWithHref;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  /*private*/ _appEl_32:import4.AppElement;
  _RouterOutlet_32_5:import17.Wrapper_RouterOutlet;
  _text_33:any;
  _text_34:any;
  _map_49:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AppComponent0);
    this._map_49 = import5.pureProxy1((p0:any):{[key: string]:any} => {
      return {exact: p0};
    });
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'nav',new import5.InlineArray2(2,'class','navbar navbar-default navbar-fixed-top'),this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',this.debug(1,0,52));
    this._el_2 = import5.createRenderElement(this.renderer,this._el_0,'div',new import5.InlineArray2(2,'class','container'),this.debug(2,1,2));
    this._text_3 = this.renderer.createText(this._el_2,'\n\n    ',this.debug(3,1,25));
    this._el_4 = import5.createRenderElement(this.renderer,this._el_2,'div',new import5.InlineArray2(2,'class','col-sm-12'),this.debug(4,3,4));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',this.debug(5,3,27));
    this._el_6 = import5.createRenderElement(this.renderer,this._el_4,'ul',new import5.InlineArray2(2,'class','nav navbar-nav'),this.debug(6,4,6));
    this._text_7 = this.renderer.createText(this._el_6,'\n\n        ',this.debug(7,4,33));
    this._el_8 = import5.createRenderElement(this.renderer,this._el_6,'li',new import5.InlineArray4(4,'role','presentation','routerLinkActive','active'),this.debug(8,6,8));
    this._RouterLinkActive_8_3 = new import14.Wrapper_RouterLinkActive(this.parentInjector.get(import18.Router),new import19.ElementRef(this._el_8),this.renderer);
    this._query_RouterLink_8_0 = new import15.QueryList<any>();
    this._query_RouterLinkWithHref_8_1 = new import15.QueryList<any>();
    this._text_9 = this.renderer.createText(this._el_8,'\n          ',this.debug(9,6,102));
    this._el_10 = import5.createRenderElement(this.renderer,this._el_8,'a',new import5.InlineArray2(2,'routerLink','/'),this.debug(10,7,10));
    this._RouterLinkWithHref_10_3 = new import16.Wrapper_RouterLinkWithHref(this.parentInjector.get(import18.Router),this.parentInjector.get(import20.ActivatedRoute),this.parentInjector.get(import21.LocationStrategy));
    this._text_11 = this.renderer.createText(this._el_10,'Home',this.debug(11,7,28));
    this._text_12 = this.renderer.createText(this._el_8,'\n        ',this.debug(12,7,36));
    this._text_13 = this.renderer.createText(this._el_6,'\n\n        ',this.debug(13,8,13));
    this._el_14 = import5.createRenderElement(this.renderer,this._el_6,'li',new import5.InlineArray4(4,'role','presentation','routerLinkActive','active'),this.debug(14,10,8));
    this._RouterLinkActive_14_3 = new import14.Wrapper_RouterLinkActive(this.parentInjector.get(import18.Router),new import19.ElementRef(this._el_14),this.renderer);
    this._query_RouterLink_14_0 = new import15.QueryList<any>();
    this._query_RouterLinkWithHref_14_1 = new import15.QueryList<any>();
    this._text_15 = this.renderer.createText(this._el_14,'\n          ',this.debug(15,10,58));
    this._el_16 = import5.createRenderElement(this.renderer,this._el_14,'a',new import5.InlineArray2(2,'routerLink','/order'),this.debug(16,11,10));
    this._RouterLinkWithHref_16_3 = new import16.Wrapper_RouterLinkWithHref(this.parentInjector.get(import18.Router),this.parentInjector.get(import20.ActivatedRoute),this.parentInjector.get(import21.LocationStrategy));
    this._text_17 = this.renderer.createText(this._el_16,'Order',this.debug(17,11,33));
    this._text_18 = this.renderer.createText(this._el_14,'\n        ',this.debug(18,11,42));
    this._text_19 = this.renderer.createText(this._el_6,'\n\n        ',this.debug(19,12,13));
    this._el_20 = import5.createRenderElement(this.renderer,this._el_6,'li',new import5.InlineArray4(4,'role','presentation','routerLinkActive','active'),this.debug(20,14,8));
    this._RouterLinkActive_20_3 = new import14.Wrapper_RouterLinkActive(this.parentInjector.get(import18.Router),new import19.ElementRef(this._el_20),this.renderer);
    this._query_RouterLink_20_0 = new import15.QueryList<any>();
    this._query_RouterLinkWithHref_20_1 = new import15.QueryList<any>();
    this._text_21 = this.renderer.createText(this._el_20,'\n          ',this.debug(21,14,58));
    this._el_22 = import5.createRenderElement(this.renderer,this._el_20,'a',new import5.InlineArray2(2,'routerLink','/products'),this.debug(22,15,10));
    this._RouterLinkWithHref_22_3 = new import16.Wrapper_RouterLinkWithHref(this.parentInjector.get(import18.Router),this.parentInjector.get(import20.ActivatedRoute),this.parentInjector.get(import21.LocationStrategy));
    this._text_23 = this.renderer.createText(this._el_22,'Manage Products',this.debug(23,15,36));
    this._text_24 = this.renderer.createText(this._el_20,'\n        ',this.debug(24,15,55));
    this._text_25 = this.renderer.createText(this._el_6,'\n\n      ',this.debug(25,16,13));
    this._text_26 = this.renderer.createText(this._el_4,'\n    ',this.debug(26,18,11));
    this._text_27 = this.renderer.createText(this._el_2,'\n\n  ',this.debug(27,19,10));
    this._text_28 = this.renderer.createText(this._el_0,'\n',this.debug(28,21,8));
    this._text_29 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(29,22,6));
    this._el_30 = import5.createRenderElement(this.renderer,parentRenderNode,'div',new import5.InlineArray2(2,'class','container content'),this.debug(30,24,0));
    this._text_31 = this.renderer.createText(this._el_30,'\n  ',this.debug(31,24,31));
    this._el_32 = import5.createRenderElement(this.renderer,this._el_30,'router-outlet',import5.EMPTY_INLINE_ARRAY,this.debug(32,25,2));
    this._appEl_32 = new import4.AppElement(32,30,this,this._el_32);
    this._RouterOutlet_32_5 = new import17.Wrapper_RouterOutlet(this.parentInjector.get(import22.RouterOutletMap),this._appEl_32.vcRef,this.parentInjector.get(import23.ComponentFactoryResolver),(null as any));
    this._text_33 = this.renderer.createText(this._el_30,'\n',this.debug(33,25,33));
    this._text_34 = this.renderer.createText(parentRenderNode,'\n',this.debug(34,26,6));
    var disposable_0:Function = this.renderer.listen(this._el_10,'click',this.eventHandler(this._handle_click_10_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_16,'click',this.eventHandler(this._handle_click_16_0.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_22,'click',this.eventHandler(this._handle_click_22_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._text_34
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.RouterLinkWithHref) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._RouterLinkWithHref_10_3.context; }
    if (((token === import11.RouterLinkActive) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._RouterLinkActive_8_3.context; }
    if (((token === import12.RouterLinkWithHref) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._RouterLinkWithHref_16_3.context; }
    if (((token === import11.RouterLinkActive) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._RouterLinkActive_14_3.context; }
    if (((token === import12.RouterLinkWithHref) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._RouterLinkWithHref_22_3.context; }
    if (((token === import11.RouterLinkActive) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._RouterLinkActive_20_3.context; }
    if (((token === import13.RouterOutlet) && (32 === requestNodeIndex))) { return this._RouterOutlet_32_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(8,6,58);
    const currVal_8_0_0:any = this._map_49(true);
    this._RouterLinkActive_8_3.check_routerLinkActiveOptions(currVal_8_0_0,throwOnChange,false);
    this.debug(8,6,32);
    const currVal_8_0_1:any = 'active';
    this._RouterLinkActive_8_3.check_routerLinkActive(currVal_8_0_1,throwOnChange,false);
    this._RouterLinkActive_8_3.detectChangesInInputProps(this,this._el_8,throwOnChange);
    this.debug(10,7,13);
    const currVal_10_0_0:any = '/';
    this._RouterLinkWithHref_10_3.check_routerLink(currVal_10_0_0,throwOnChange,false);
    this._RouterLinkWithHref_10_3.detectChangesInInputProps(this,this._el_10,throwOnChange);
    this.debug(14,10,32);
    const currVal_14_0_0:any = 'active';
    this._RouterLinkActive_14_3.check_routerLinkActive(currVal_14_0_0,throwOnChange,false);
    this._RouterLinkActive_14_3.detectChangesInInputProps(this,this._el_14,throwOnChange);
    this.debug(16,11,13);
    const currVal_16_0_0:any = '/order';
    this._RouterLinkWithHref_16_3.check_routerLink(currVal_16_0_0,throwOnChange,false);
    this._RouterLinkWithHref_16_3.detectChangesInInputProps(this,this._el_16,throwOnChange);
    this.debug(20,14,32);
    const currVal_20_0_0:any = 'active';
    this._RouterLinkActive_20_3.check_routerLinkActive(currVal_20_0_0,throwOnChange,false);
    this._RouterLinkActive_20_3.detectChangesInInputProps(this,this._el_20,throwOnChange);
    this.debug(22,15,13);
    const currVal_22_0_0:any = '/products';
    this._RouterLinkWithHref_22_3.check_routerLink(currVal_22_0_0,throwOnChange,false);
    this._RouterLinkWithHref_22_3.detectChangesInInputProps(this,this._el_22,throwOnChange);
    this.debug(32,25,2);
    this._RouterOutlet_32_5.detectChangesInInputProps(this,this._el_32,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_8_0.dirty) {
        this._query_RouterLink_8_0.reset(([] as any[]));
        this._RouterLinkActive_8_3.context.links = this._query_RouterLink_8_0;
        this._query_RouterLink_8_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_8_1.dirty) {
        this._query_RouterLinkWithHref_8_1.reset([this._RouterLinkWithHref_10_3.context]);
        this._RouterLinkActive_8_3.context.linksWithHrefs = this._query_RouterLinkWithHref_8_1;
        this._query_RouterLinkWithHref_8_1.notifyOnChanges();
      }
      if (this._query_RouterLink_14_0.dirty) {
        this._query_RouterLink_14_0.reset(([] as any[]));
        this._RouterLinkActive_14_3.context.links = this._query_RouterLink_14_0;
        this._query_RouterLink_14_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_14_1.dirty) {
        this._query_RouterLinkWithHref_14_1.reset([this._RouterLinkWithHref_16_3.context]);
        this._RouterLinkActive_14_3.context.linksWithHrefs = this._query_RouterLinkWithHref_14_1;
        this._query_RouterLinkWithHref_14_1.notifyOnChanges();
      }
      if (this._query_RouterLink_20_0.dirty) {
        this._query_RouterLink_20_0.reset(([] as any[]));
        this._RouterLinkActive_20_3.context.links = this._query_RouterLink_20_0;
        this._query_RouterLink_20_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_20_1.dirty) {
        this._query_RouterLinkWithHref_20_1.reset([this._RouterLinkWithHref_22_3.context]);
        this._RouterLinkActive_20_3.context.linksWithHrefs = this._query_RouterLinkWithHref_20_1;
        this._query_RouterLinkWithHref_20_1.notifyOnChanges();
      }
      this.debug(8,6,8);
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_8_3.context.ngAfterContentInit(); }
      this.debug(14,10,8);
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_14_3.context.ngAfterContentInit(); }
      this.debug(20,14,8);
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_20_3.context.ngAfterContentInit(); }
    }
    this._RouterLinkActive_8_3.detectChangesInHostProps(this,this._el_8,throwOnChange);
    this._RouterLinkWithHref_10_3.detectChangesInHostProps(this,this._el_10,throwOnChange);
    this._RouterLinkActive_14_3.detectChangesInHostProps(this,this._el_14,throwOnChange);
    this._RouterLinkWithHref_16_3.detectChangesInHostProps(this,this._el_16,throwOnChange);
    this._RouterLinkActive_20_3.detectChangesInHostProps(this,this._el_20,throwOnChange);
    this._RouterLinkWithHref_22_3.detectChangesInHostProps(this,this._el_22,throwOnChange);
    this._RouterOutlet_32_5.detectChangesInHostProps(this,this._el_32,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(10,7,10);
    this._RouterLinkWithHref_10_3.context.ngOnDestroy();
    this.debug(8,6,8);
    this._RouterLinkActive_8_3.context.ngOnDestroy();
    this.debug(16,11,10);
    this._RouterLinkWithHref_16_3.context.ngOnDestroy();
    this.debug(14,10,8);
    this._RouterLinkActive_14_3.context.ngOnDestroy();
    this.debug(22,15,10);
    this._RouterLinkWithHref_22_3.context.ngOnDestroy();
    this.debug(20,14,8);
    this._RouterLinkActive_20_3.context.ngOnDestroy();
    this.debug(32,25,2);
    this._RouterOutlet_32_5.context.ngOnDestroy();
  }
  private _handle_click_10_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(10,7,10);
    const pd_10_0:any = ((<any>this._RouterLinkWithHref_10_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_10_0);
  }
  private _handle_click_16_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(16,11,10);
    const pd_16_0:any = ((<any>this._RouterLinkWithHref_16_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_16_0);
  }
  private _handle_click_22_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(22,15,10);
    const pd_22_0:any = ((<any>this._RouterLinkWithHref_22_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_22_0);
  }
}
export function viewFactory_AppComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<import0.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('/Users/peterdickten/versioned/dcs-food-order/src/app/app.component.html',0,import9.ViewEncapsulation.None,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}