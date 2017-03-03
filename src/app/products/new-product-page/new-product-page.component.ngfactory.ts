/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './new-product-page.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from 'ng2-redux/lib/components/ng-redux';
import * as import10 from '../backend/products/products.actions';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../product-form/product-form.component';
import * as import14 from '@angular/router/src/directives/router_link';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../product-form/product-form.component.ngfactory';
import * as import17 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import18 from '@angular/forms/src/form_builder';
import * as import19 from '@angular/router/src/router';
import * as import20 from '@angular/router/src/router_state';
import * as import21 from '@angular/common/src/location/location_strategy';
export class Wrapper_NewProductPageComponent {
  context:import0.NewProductPageComponent;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.NewProductPageComponent(p0,p1);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
const nodeDebugInfos_NewProductPageComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.NewProductPageComponent],import0.NewProductPageComponent,{})];
var renderType_NewProductPageComponent_Host:import3.RenderComponentType = (null as any);
class _View_NewProductPageComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _NewProductPageComponent_0_4:Wrapper_NewProductPageComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_NewProductPageComponent_Host0,renderType_NewProductPageComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NewProductPageComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'dcs-new-product-page',import5.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_NewProductPageComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NewProductPageComponent_0_4 = new Wrapper_NewProductPageComponent(this.parentInjector.get(import9.NgRedux),this.parentInjector.get(import10.ProductsActions));
    this._appEl_0.initComponent(this._NewProductPageComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._NewProductPageComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NewProductPageComponent) && (0 === requestNodeIndex))) { return this._NewProductPageComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._NewProductPageComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NewProductPageComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_NewProductPageComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<any> {
  if ((renderType_NewProductPageComponent_Host === (null as any))) { (renderType_NewProductPageComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_NewProductPageComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const NewProductPageComponentNgFactory:import12.ComponentFactory<import0.NewProductPageComponent> = new import12.ComponentFactory<import0.NewProductPageComponent>('dcs-new-product-page',viewFactory_NewProductPageComponent_Host0,import0.NewProductPageComponent);
const styles_NewProductPageComponent:any[] = ([] as any[]);
const nodeDebugInfos_NewProductPageComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import13.ProductFormComponent],import13.ProductFormComponent,{productForm: import13.ProductFormComponent}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import14.RouterLinkWithHref],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_NewProductPageComponent:import3.RenderComponentType = (null as any);
class _View_NewProductPageComponent0 extends import1.DebugAppView<import0.NewProductPageComponent> {
  _viewQuery_productForm_0:import15.QueryList<any>;
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  /*private*/ _appEl_7:import4.AppElement;
  _ProductFormComponent_7_4:import16.Wrapper_ProductFormComponent;
  _text_8:any;
  _el_9:any;
  _RouterLinkWithHref_9_3:import17.Wrapper_RouterLinkWithHref;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_NewProductPageComponent0,renderType_NewProductPageComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NewProductPageComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_productForm_0 = new import15.QueryList<any>();
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'div',new import5.InlineArray2(2,'class','row'),this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',this.debug(1,0,17));
    this._el_2 = import5.createRenderElement(this.renderer,this._el_0,'div',new import5.InlineArray2(2,'class','col-sm-12'),this.debug(2,1,2));
    this._text_3 = this.renderer.createText(this._el_2,'\n\n    ',this.debug(3,1,25));
    this._el_4 = import5.createRenderElement(this.renderer,this._el_2,'h1',import5.EMPTY_INLINE_ARRAY,this.debug(4,3,4));
    this._text_5 = this.renderer.createText(this._el_4,'Add new Product',this.debug(5,3,8));
    this._text_6 = this.renderer.createText(this._el_2,'\n\n    ',this.debug(6,3,28));
    this._el_7 = import5.createRenderElement(this.renderer,this._el_2,'dcs-product-form',import5.EMPTY_INLINE_ARRAY,this.debug(7,5,4));
    this._appEl_7 = new import4.AppElement(7,2,this,this._el_7);
    var compView_7:any = import16.viewFactory_ProductFormComponent0(this.viewUtils,this.injector(7),this._appEl_7);
    this._ProductFormComponent_7_4 = new import16.Wrapper_ProductFormComponent(this.parentInjector.get(import18.FormBuilder));
    this._appEl_7.initComponent(this._ProductFormComponent_7_4.context,([] as any[]),compView_7);
    compView_7.create(this._ProductFormComponent_7_4.context,([] as any[]),(null as any));
    this._text_8 = this.renderer.createText(this._el_2,'\n\n    ',this.debug(8,5,87));
    this._el_9 = import5.createRenderElement(this.renderer,this._el_2,'a',new import5.InlineArray2(2,'routerLink','/products'),this.debug(9,7,4));
    this._RouterLinkWithHref_9_3 = new import17.Wrapper_RouterLinkWithHref(this.parentInjector.get(import19.Router),this.parentInjector.get(import20.ActivatedRoute),this.parentInjector.get(import21.LocationStrategy));
    this._text_10 = this.renderer.createText(this._el_9,'back',this.debug(10,7,30));
    this._text_11 = this.renderer.createText(this._el_2,'\n\n  ',this.debug(11,7,38));
    this._text_12 = this.renderer.createText(this._el_0,'\n',this.debug(12,9,8));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n\n\n\n',this.debug(13,10,6));
    var disposable_0:Function = this.renderer.listen(this._el_7,'onSubmit',this.eventHandler(this._handle_onSubmit_7_0.bind(this)));
    const subscription_0:any = this._ProductFormComponent_7_4.context.onSubmit.subscribe(this.eventHandler(this._handle_onSubmit_7_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_9,'click',this.eventHandler(this._handle_click_9_0.bind(this)));
    this._viewQuery_productForm_0.reset([this._ProductFormComponent_7_4.context]);
    this.context.productForm = this._viewQuery_productForm_0.first;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.ProductFormComponent) && (7 === requestNodeIndex))) { return this._ProductFormComponent_7_4.context; }
    if (((token === import14.RouterLinkWithHref) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._RouterLinkWithHref_9_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(7,5,4);
    this._ProductFormComponent_7_4.detectChangesInInputProps(this,this._el_7,throwOnChange);
    this.debug(9,7,7);
    const currVal_9_0_0:any = '/products';
    this._RouterLinkWithHref_9_3.check_routerLink(currVal_9_0_0,throwOnChange,false);
    this._RouterLinkWithHref_9_3.detectChangesInInputProps(this,this._el_9,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._ProductFormComponent_7_4.detectChangesInHostProps(this,this._el_7,throwOnChange);
    this._RouterLinkWithHref_9_3.detectChangesInHostProps(this,this._el_9,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(9,7,4);
    this._RouterLinkWithHref_9_3.context.ngOnDestroy();
  }
  private _handle_onSubmit_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(7,5,35);
    const pd_7_0:any = ((<any>this.context.saveProduct($event)) !== false);
    return (true && pd_7_0);
  }
  private _handle_click_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(9,7,4);
    const pd_9_0:any = ((<any>this._RouterLinkWithHref_9_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_9_0);
  }
}
export function viewFactory_NewProductPageComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<import0.NewProductPageComponent> {
  if ((renderType_NewProductPageComponent === (null as any))) { (renderType_NewProductPageComponent = viewUtils.createRenderComponentType('/Users/peterdickten/versioned/dcs-food-order/src/app/products/new-product-page/new-product-page.component.html',0,import11.ViewEncapsulation.None,styles_NewProductPageComponent,{})); }
  return new _View_NewProductPageComponent0(viewUtils,parentInjector,declarationEl);
}