/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './product-form.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/forms/src/form_builder';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import13 from '@angular/forms/src/directives/control_container';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from '@angular/forms/src/directives/default_value_accessor';
import * as import16 from '@angular/forms/src/directives/control_value_accessor';
import * as import17 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import18 from '@angular/forms/src/directives/ng_control';
import * as import19 from '@angular/common/src/directives/ng_class';
import * as import20 from '@angular/forms/src/directives/number_value_accessor';
import * as import21 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import22 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import23 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import24 from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import25 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import26 from '../../../../node_modules/@angular/forms/src/directives/number_value_accessor.ngfactory';
import * as import27 from '@angular/core/src/linker/element_ref';
import * as import28 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import29 from '@angular/core/src/change_detection/differs/keyvalue_differs';
export class Wrapper_ProductFormComponent {
  context:import0.ProductFormComponent;
  changed:boolean;
  changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this.changed = false;
    this.changes = {};
    this.context = new import0.ProductFormComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  check_product(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.product = currValue;
      this.changes['product'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this.changes);
      this.changes = {};
    } }
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
const nodeDebugInfos_ProductFormComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.ProductFormComponent],import0.ProductFormComponent,{})];
var renderType_ProductFormComponent_Host:import5.RenderComponentType = (null as any);
class _View_ProductFormComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _ProductFormComponent_0_4:Wrapper_ProductFormComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_ProductFormComponent_Host0,renderType_ProductFormComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ProductFormComponent_Host0);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'dcs-product-form',import2.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ProductFormComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ProductFormComponent_0_4 = new Wrapper_ProductFormComponent(this.parentInjector.get(import9.FormBuilder));
    this._appEl_0.initComponent(this._ProductFormComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ProductFormComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ProductFormComponent) && (0 === requestNodeIndex))) { return this._ProductFormComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._ProductFormComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._ProductFormComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ProductFormComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  if ((renderType_ProductFormComponent_Host === (null as any))) { (renderType_ProductFormComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ProductFormComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ProductFormComponentNgFactory:import11.ComponentFactory<import0.ProductFormComponent> = new import11.ComponentFactory<import0.ProductFormComponent>('dcs-product-form',viewFactory_ProductFormComponent_Host0,import0.ProductFormComponent);
const styles_ProductFormComponent:any[] = ([] as any[]);
const nodeDebugInfos_ProductFormComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo([
    import12.FormGroupDirective,
    import13.ControlContainer,
    import14.NgControlStatusGroup
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import15.DefaultValueAccessor,
    import16.NG_VALUE_ACCESSOR,
    import17.FormControlName,
    import18.NgControl,
    import14.NgControlStatus
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import19.NgClass],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import15.DefaultValueAccessor,
    import16.NG_VALUE_ACCESSOR,
    import17.FormControlName,
    import18.NgControl,
    import14.NgControlStatus
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import19.NgClass],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import15.DefaultValueAccessor,
    import16.NG_VALUE_ACCESSOR,
    import17.FormControlName,
    import18.NgControl,
    import14.NgControlStatus
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import19.NgClass],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import15.DefaultValueAccessor,
    import20.NumberValueAccessor,
    import16.NG_VALUE_ACCESSOR,
    import17.FormControlName,
    import18.NgControl,
    import14.NgControlStatus
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_ProductFormComponent:import5.RenderComponentType = (null as any);
class _View_ProductFormComponent0 extends import3.DebugAppView<import0.ProductFormComponent> {
  _el_0:any;
  _FormGroupDirective_0_3:import21.Wrapper_FormGroupDirective;
  _ControlContainer_0_4:any;
  _NgControlStatusGroup_0_5:import22.Wrapper_NgControlStatusGroup;
  _text_1:any;
  _el_2:any;
  _DefaultValueAccessor_2_3:import23.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_2_4:any[];
  _FormControlName_2_5:import24.Wrapper_FormControlName;
  _NgControl_2_6:any;
  _NgControlStatus_2_7:import22.Wrapper_NgControlStatus;
  _text_3:any;
  _el_4:any;
  _NgClass_4_3:import25.Wrapper_NgClass;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _DefaultValueAccessor_11_3:import23.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_11_4:any[];
  _FormControlName_11_5:import24.Wrapper_FormControlName;
  _NgControl_11_6:any;
  _NgControlStatus_11_7:import22.Wrapper_NgControlStatus;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _NgClass_15_3:import25.Wrapper_NgClass;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _DefaultValueAccessor_22_3:import23.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_22_4:any[];
  _FormControlName_22_5:import24.Wrapper_FormControlName;
  _NgControl_22_6:any;
  _NgControlStatus_22_7:import22.Wrapper_NgControlStatus;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  _NgClass_26_3:import25.Wrapper_NgClass;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _el_33:any;
  _DefaultValueAccessor_33_3:import23.Wrapper_DefaultValueAccessor;
  _NumberValueAccessor_33_4:import26.Wrapper_NumberValueAccessor;
  _NG_VALUE_ACCESSOR_33_5:any[];
  _FormControlName_33_6:import24.Wrapper_FormControlName;
  _NgControl_33_7:any;
  _NgControlStatus_33_8:import22.Wrapper_NgControlStatus;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _map_74:any;
  _map_75:any;
  _map_76:any;
  /*private*/ _expr_77:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_ProductFormComponent0,renderType_ProductFormComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_ProductFormComponent0);
    this._map_74 = import2.pureProxy1((p0:any):{[key: string]:any} => {
      return {error: p0};
    });
    this._map_75 = import2.pureProxy1((p0:any):{[key: string]:any} => {
      return {error: p0};
    });
    this._map_76 = import2.pureProxy1((p0:any):{[key: string]:any} => {
      return {error: p0};
    });
    this._expr_77 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import6.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import2.createRenderElement(this.renderer,parentRenderNode,'form',new import2.InlineArray2(2,'class','form-horizontal'),this.debug(0,0,0));
    this._FormGroupDirective_0_3 = new import21.Wrapper_FormGroupDirective((null as any),(null as any));
    this._ControlContainer_0_4 = this._FormGroupDirective_0_3.context;
    this._NgControlStatusGroup_0_5 = new import22.Wrapper_NgControlStatusGroup(this._ControlContainer_0_4);
    this._text_1 = this.renderer.createText(this._el_0,'\n\n  ',this.debug(1,0,49));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'input',new import2.InlineArray8(6,'class','form-control','formControlName','id','type','hidden'),this.debug(2,2,2));
    this._DefaultValueAccessor_2_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer,new import27.ElementRef(this._el_2));
    this._NG_VALUE_ACCESSOR_2_4 = [this._DefaultValueAccessor_2_3.context];
    this._FormControlName_2_5 = new import24.Wrapper_FormControlName(this._ControlContainer_0_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_2_4);
    this._NgControl_2_6 = this._FormControlName_2_5.context;
    this._NgControlStatus_2_7 = new import22.Wrapper_NgControlStatus(this._NgControl_2_6);
    this._text_3 = this.renderer.createText(this._el_0,'\n\n  ',this.debug(3,2,64));
    this._el_4 = import2.createRenderElement(this.renderer,this._el_0,'div',new import2.InlineArray2(2,'class','form-group'),this.debug(4,4,2));
    this._NgClass_4_3 = new import25.Wrapper_NgClass(this.parentInjector.get(import28.IterableDiffers),this.parentInjector.get(import29.KeyValueDiffers),new import27.ElementRef(this._el_4),this.renderer);
    this._text_5 = this.renderer.createText(this._el_4,'\n    ',this.debug(5,4,77));
    this._el_6 = import2.createRenderElement(this.renderer,this._el_4,'label',new import2.InlineArray4(4,'class','col-sm-2 control-label','for','inputArticleId'),this.debug(6,5,4));
    this._text_7 = this.renderer.createText(this._el_6,'Article ID',this.debug(7,5,63));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',this.debug(8,5,81));
    this._el_9 = import2.createRenderElement(this.renderer,this._el_4,'div',new import2.InlineArray2(2,'class','col-sm-10'),this.debug(9,6,4));
    this._text_10 = this.renderer.createText(this._el_9,'\n      ',this.debug(10,6,27));
    this._el_11 = import2.createRenderElement(this.renderer,this._el_9,'input',new import2.InlineArray16(10,'class','form-control','formControlName','articleId','id','inputArticleId','placeholder','Article ID','type','string'),this.debug(11,7,6));
    this._DefaultValueAccessor_11_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer,new import27.ElementRef(this._el_11));
    this._NG_VALUE_ACCESSOR_11_4 = [this._DefaultValueAccessor_11_3.context];
    this._FormControlName_11_5 = new import24.Wrapper_FormControlName(this._ControlContainer_0_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_11_4);
    this._NgControl_11_6 = this._FormControlName_11_5.context;
    this._NgControlStatus_11_7 = new import22.Wrapper_NgControlStatus(this._NgControl_11_6);
    this._text_12 = this.renderer.createText(this._el_9,'\n    ',this.debug(12,7,121));
    this._text_13 = this.renderer.createText(this._el_4,'\n  ',this.debug(13,8,10));
    this._text_14 = this.renderer.createText(this._el_0,'\n\n  ',this.debug(14,9,8));
    this._el_15 = import2.createRenderElement(this.renderer,this._el_0,'div',new import2.InlineArray2(2,'class','form-group'),this.debug(15,11,2));
    this._NgClass_15_3 = new import25.Wrapper_NgClass(this.parentInjector.get(import28.IterableDiffers),this.parentInjector.get(import29.KeyValueDiffers),new import27.ElementRef(this._el_15),this.renderer);
    this._text_16 = this.renderer.createText(this._el_15,'\n    ',this.debug(16,11,73));
    this._el_17 = import2.createRenderElement(this.renderer,this._el_15,'label',new import2.InlineArray4(4,'class','col-sm-2 control-label','for','inputLabel'),this.debug(17,12,4));
    this._text_18 = this.renderer.createText(this._el_17,'Label',this.debug(18,12,59));
    this._text_19 = this.renderer.createText(this._el_15,'\n    ',this.debug(19,12,72));
    this._el_20 = import2.createRenderElement(this.renderer,this._el_15,'div',new import2.InlineArray2(2,'class','col-sm-10'),this.debug(20,13,4));
    this._text_21 = this.renderer.createText(this._el_20,'\n      ',this.debug(21,13,27));
    this._el_22 = import2.createRenderElement(this.renderer,this._el_20,'input',new import2.InlineArray16(10,'class','form-control','formControlName','label','id','inputLabel','placeholder','Label','type','text'),this.debug(22,14,6));
    this._DefaultValueAccessor_22_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer,new import27.ElementRef(this._el_22));
    this._NG_VALUE_ACCESSOR_22_4 = [this._DefaultValueAccessor_22_3.context];
    this._FormControlName_22_5 = new import24.Wrapper_FormControlName(this._ControlContainer_0_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_22_4);
    this._NgControl_22_6 = this._FormControlName_22_5.context;
    this._NgControlStatus_22_7 = new import22.Wrapper_NgControlStatus(this._NgControl_22_6);
    this._text_23 = this.renderer.createText(this._el_20,'\n    ',this.debug(23,14,106));
    this._text_24 = this.renderer.createText(this._el_15,'\n  ',this.debug(24,15,10));
    this._text_25 = this.renderer.createText(this._el_0,'\n\n  ',this.debug(25,16,8));
    this._el_26 = import2.createRenderElement(this.renderer,this._el_0,'div',new import2.InlineArray2(2,'class','form-group'),this.debug(26,18,2));
    this._NgClass_26_3 = new import25.Wrapper_NgClass(this.parentInjector.get(import28.IterableDiffers),this.parentInjector.get(import29.KeyValueDiffers),new import27.ElementRef(this._el_26),this.renderer);
    this._text_27 = this.renderer.createText(this._el_26,'\n    ',this.debug(27,18,73));
    this._el_28 = import2.createRenderElement(this.renderer,this._el_26,'label',new import2.InlineArray4(4,'class','col-sm-2 control-label','for','inputPrice'),this.debug(28,19,4));
    this._text_29 = this.renderer.createText(this._el_28,'Price',this.debug(29,19,59));
    this._text_30 = this.renderer.createText(this._el_26,'\n    ',this.debug(30,19,72));
    this._el_31 = import2.createRenderElement(this.renderer,this._el_26,'div',new import2.InlineArray2(2,'class','col-sm-10'),this.debug(31,20,4));
    this._text_32 = this.renderer.createText(this._el_31,'\n      ',this.debug(32,20,27));
    this._el_33 = import2.createRenderElement(this.renderer,this._el_31,'input',new import2.InlineArray16(14,'class','form-control','formControlName','price','id','inputPrice','min','0.1','placeholder','Price','step','0.05','type','number'),this.debug(33,21,6));
    this._DefaultValueAccessor_33_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer,new import27.ElementRef(this._el_33));
    this._NumberValueAccessor_33_4 = new import26.Wrapper_NumberValueAccessor(this.renderer,new import27.ElementRef(this._el_33));
    this._NG_VALUE_ACCESSOR_33_5 = [
      this._DefaultValueAccessor_33_3.context,
      this._NumberValueAccessor_33_4.context
    ]
    ;
    this._FormControlName_33_6 = new import24.Wrapper_FormControlName(this._ControlContainer_0_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_33_5);
    this._NgControl_33_7 = this._FormControlName_33_6.context;
    this._NgControlStatus_33_8 = new import22.Wrapper_NgControlStatus(this._NgControl_33_7);
    this._text_34 = this.renderer.createText(this._el_31,'\n    ',this.debug(34,21,130));
    this._text_35 = this.renderer.createText(this._el_26,'\n  ',this.debug(35,22,10));
    this._text_36 = this.renderer.createText(this._el_0,'\n\n  ',this.debug(36,23,8));
    this._el_37 = import2.createRenderElement(this.renderer,this._el_0,'div',new import2.InlineArray2(2,'class','form-group'),this.debug(37,25,2));
    this._text_38 = this.renderer.createText(this._el_37,'\n    ',this.debug(38,25,26));
    this._el_39 = import2.createRenderElement(this.renderer,this._el_37,'div',new import2.InlineArray2(2,'class','col-sm-offset-2 col-sm-10'),this.debug(39,26,4));
    this._text_40 = this.renderer.createText(this._el_39,'\n      ',this.debug(40,26,43));
    this._el_41 = import2.createRenderElement(this.renderer,this._el_39,'button',new import2.InlineArray4(4,'class','btn btn-default','type','submit'),this.debug(41,27,6));
    this._text_42 = this.renderer.createText(this._el_41,'Submit',this.debug(42,27,114));
    this._text_43 = this.renderer.createText(this._el_39,'\n    ',this.debug(43,27,129));
    this._text_44 = this.renderer.createText(this._el_37,'\n  ',this.debug(44,28,10));
    this._text_45 = this.renderer.createText(this._el_0,'\n',this.debug(45,29,8));
    this._text_46 = this.renderer.createText(parentRenderNode,'\n',this.debug(46,30,7));
    var disposable_0:Function = this.renderer.listen(this._el_0,'submit',this.eventHandler(this._handle_submit_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'reset',this.eventHandler(this._handle_reset_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_2,'input',this.eventHandler(this._handle_input_2_0.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_2,'blur',this.eventHandler(this._handle_blur_2_1.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_11,'input',this.eventHandler(this._handle_input_11_0.bind(this)));
    var disposable_5:Function = this.renderer.listen(this._el_11,'blur',this.eventHandler(this._handle_blur_11_1.bind(this)));
    var disposable_6:Function = this.renderer.listen(this._el_22,'input',this.eventHandler(this._handle_input_22_0.bind(this)));
    var disposable_7:Function = this.renderer.listen(this._el_22,'blur',this.eventHandler(this._handle_blur_22_1.bind(this)));
    var disposable_8:Function = this.renderer.listen(this._el_33,'input',this.eventHandler(this._handle_input_33_0.bind(this)));
    var disposable_9:Function = this.renderer.listen(this._el_33,'blur',this.eventHandler(this._handle_blur_33_1.bind(this)));
    var disposable_10:Function = this.renderer.listen(this._el_33,'change',this.eventHandler(this._handle_change_33_2.bind(this)));
    var disposable_11:Function = this.renderer.listen(this._el_41,'click',this.eventHandler(this._handle_click_41_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5,
      disposable_6,
      disposable_7,
      disposable_8,
      disposable_9,
      disposable_10,
      disposable_11
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.DefaultValueAccessor) && (2 === requestNodeIndex))) { return this._DefaultValueAccessor_2_3.context; }
    if (((token === import16.NG_VALUE_ACCESSOR) && (2 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_2_4; }
    if (((token === import17.FormControlName) && (2 === requestNodeIndex))) { return this._FormControlName_2_5.context; }
    if (((token === import18.NgControl) && (2 === requestNodeIndex))) { return this._NgControl_2_6; }
    if (((token === import14.NgControlStatus) && (2 === requestNodeIndex))) { return this._NgControlStatus_2_7.context; }
    if (((token === import15.DefaultValueAccessor) && (11 === requestNodeIndex))) { return this._DefaultValueAccessor_11_3.context; }
    if (((token === import16.NG_VALUE_ACCESSOR) && (11 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_11_4; }
    if (((token === import17.FormControlName) && (11 === requestNodeIndex))) { return this._FormControlName_11_5.context; }
    if (((token === import18.NgControl) && (11 === requestNodeIndex))) { return this._NgControl_11_6; }
    if (((token === import14.NgControlStatus) && (11 === requestNodeIndex))) { return this._NgControlStatus_11_7.context; }
    if (((token === import19.NgClass) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._NgClass_4_3.context; }
    if (((token === import15.DefaultValueAccessor) && (22 === requestNodeIndex))) { return this._DefaultValueAccessor_22_3.context; }
    if (((token === import16.NG_VALUE_ACCESSOR) && (22 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_22_4; }
    if (((token === import17.FormControlName) && (22 === requestNodeIndex))) { return this._FormControlName_22_5.context; }
    if (((token === import18.NgControl) && (22 === requestNodeIndex))) { return this._NgControl_22_6; }
    if (((token === import14.NgControlStatus) && (22 === requestNodeIndex))) { return this._NgControlStatus_22_7.context; }
    if (((token === import19.NgClass) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._NgClass_15_3.context; }
    if (((token === import15.DefaultValueAccessor) && (33 === requestNodeIndex))) { return this._DefaultValueAccessor_33_3.context; }
    if (((token === import20.NumberValueAccessor) && (33 === requestNodeIndex))) { return this._NumberValueAccessor_33_4.context; }
    if (((token === import16.NG_VALUE_ACCESSOR) && (33 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_33_5; }
    if (((token === import17.FormControlName) && (33 === requestNodeIndex))) { return this._FormControlName_33_6.context; }
    if (((token === import18.NgControl) && (33 === requestNodeIndex))) { return this._NgControl_33_7; }
    if (((token === import14.NgControlStatus) && (33 === requestNodeIndex))) { return this._NgControlStatus_33_8.context; }
    if (((token === import19.NgClass) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 35)))) { return this._NgClass_26_3.context; }
    if (((token === import12.FormGroupDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 45)))) { return this._FormGroupDirective_0_3.context; }
    if (((token === import13.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 45)))) { return this._ControlContainer_0_4; }
    if (((token === import14.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 45)))) { return this._NgControlStatusGroup_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,30);
    const currVal_0_0_0:any = this.context.form;
    this._FormGroupDirective_0_3.check_form(currVal_0_0_0,throwOnChange,false);
    this._FormGroupDirective_0_3.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.debug(0,0,0);
    this._NgControlStatusGroup_0_5.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.debug(2,2,2);
    this._DefaultValueAccessor_2_3.detectChangesInInputProps(this,this._el_2,throwOnChange);
    this.debug(2,2,43);
    const currVal_2_1_0:any = 'id';
    this._FormControlName_2_5.check_name(currVal_2_1_0,throwOnChange,false);
    this._FormControlName_2_5.detectChangesInInputProps(this,this._el_2,throwOnChange);
    this.debug(2,2,2);
    this._NgControlStatus_2_7.detectChangesInInputProps(this,this._el_2,throwOnChange);
    this.debug(4,4,7);
    const currVal_4_0_0:any = 'form-group';
    this._NgClass_4_3.check_klass(currVal_4_0_0,throwOnChange,false);
    this.debug(4,4,26);
    const currVal_4_0_1:any = this._map_74(this.context.hasError(this.context.form,'articleId'));
    this._NgClass_4_3.check_ngClass(currVal_4_0_1,throwOnChange,false);
    this._NgClass_4_3.detectChangesInInputProps(this,this._el_4,throwOnChange);
    this.debug(11,7,6);
    this._DefaultValueAccessor_11_3.detectChangesInInputProps(this,this._el_11,throwOnChange);
    this.debug(11,7,93);
    const currVal_11_1_0:any = 'articleId';
    this._FormControlName_11_5.check_name(currVal_11_1_0,throwOnChange,false);
    this._FormControlName_11_5.detectChangesInInputProps(this,this._el_11,throwOnChange);
    this.debug(11,7,6);
    this._NgControlStatus_11_7.detectChangesInInputProps(this,this._el_11,throwOnChange);
    this.debug(15,11,7);
    const currVal_15_0_0:any = 'form-group';
    this._NgClass_15_3.check_klass(currVal_15_0_0,throwOnChange,false);
    this.debug(15,11,26);
    const currVal_15_0_1:any = this._map_75(this.context.hasError(this.context.form,'label'));
    this._NgClass_15_3.check_ngClass(currVal_15_0_1,throwOnChange,false);
    this._NgClass_15_3.detectChangesInInputProps(this,this._el_15,throwOnChange);
    this.debug(22,14,6);
    this._DefaultValueAccessor_22_3.detectChangesInInputProps(this,this._el_22,throwOnChange);
    this.debug(22,14,82);
    const currVal_22_1_0:any = 'label';
    this._FormControlName_22_5.check_name(currVal_22_1_0,throwOnChange,false);
    this._FormControlName_22_5.detectChangesInInputProps(this,this._el_22,throwOnChange);
    this.debug(22,14,6);
    this._NgControlStatus_22_7.detectChangesInInputProps(this,this._el_22,throwOnChange);
    this.debug(26,18,7);
    const currVal_26_0_0:any = 'form-group';
    this._NgClass_26_3.check_klass(currVal_26_0_0,throwOnChange,false);
    this.debug(26,18,26);
    const currVal_26_0_1:any = this._map_76(this.context.hasError(this.context.form,'price'));
    this._NgClass_26_3.check_ngClass(currVal_26_0_1,throwOnChange,false);
    this._NgClass_26_3.detectChangesInInputProps(this,this._el_26,throwOnChange);
    this.debug(33,21,6);
    this._DefaultValueAccessor_33_3.detectChangesInInputProps(this,this._el_33,throwOnChange);
    this._NumberValueAccessor_33_4.detectChangesInInputProps(this,this._el_33,throwOnChange);
    this.debug(33,21,106);
    const currVal_33_2_0:any = 'price';
    this._FormControlName_33_6.check_name(currVal_33_2_0,throwOnChange,false);
    this._FormControlName_33_6.detectChangesInInputProps(this,this._el_33,throwOnChange);
    this.debug(33,21,6);
    this._NgControlStatus_33_8.detectChangesInInputProps(this,this._el_33,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._FormGroupDirective_0_3.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._NgControlStatusGroup_0_5.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._DefaultValueAccessor_2_3.detectChangesInHostProps(this,this._el_2,throwOnChange);
    this._FormControlName_2_5.detectChangesInHostProps(this,this._el_2,throwOnChange);
    this._NgControlStatus_2_7.detectChangesInHostProps(this,this._el_2,throwOnChange);
    this._NgClass_4_3.detectChangesInHostProps(this,this._el_4,throwOnChange);
    this._DefaultValueAccessor_11_3.detectChangesInHostProps(this,this._el_11,throwOnChange);
    this._FormControlName_11_5.detectChangesInHostProps(this,this._el_11,throwOnChange);
    this._NgControlStatus_11_7.detectChangesInHostProps(this,this._el_11,throwOnChange);
    this._NgClass_15_3.detectChangesInHostProps(this,this._el_15,throwOnChange);
    this._DefaultValueAccessor_22_3.detectChangesInHostProps(this,this._el_22,throwOnChange);
    this._FormControlName_22_5.detectChangesInHostProps(this,this._el_22,throwOnChange);
    this._NgControlStatus_22_7.detectChangesInHostProps(this,this._el_22,throwOnChange);
    this._NgClass_26_3.detectChangesInHostProps(this,this._el_26,throwOnChange);
    this._DefaultValueAccessor_33_3.detectChangesInHostProps(this,this._el_33,throwOnChange);
    this._NumberValueAccessor_33_4.detectChangesInHostProps(this,this._el_33,throwOnChange);
    this._FormControlName_33_6.detectChangesInHostProps(this,this._el_33,throwOnChange);
    this._NgControlStatus_33_8.detectChangesInHostProps(this,this._el_33,throwOnChange);
    this.debug(41,27,88);
    const currVal_77:any = this.context.form.invalid;
    if (import2.checkBinding(throwOnChange,this._expr_77,currVal_77)) {
      this.renderer.setElementProperty(this._el_41,'disabled',currVal_77);
      this._expr_77 = currVal_77;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(2,2,2);
    this._FormControlName_2_5.context.ngOnDestroy();
    this.debug(11,7,6);
    this._FormControlName_11_5.context.ngOnDestroy();
    this.debug(22,14,6);
    this._FormControlName_22_5.context.ngOnDestroy();
    this.debug(33,21,6);
    this._FormControlName_33_6.context.ngOnDestroy();
  }
  private _handle_submit_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(0,0,0);
    const pd_0_0:any = ((<any>this._FormGroupDirective_0_3.context.onSubmit($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_reset_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(0,0,0);
    const pd_0_0:any = ((<any>this._FormGroupDirective_0_3.context.onReset()) !== false);
    return (true && pd_0_0);
  }
  private _handle_input_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(2,2,2);
    const pd_2_0:any = ((<any>this._DefaultValueAccessor_2_3.context.onChange($event.target.value)) !== false);
    return (true && pd_2_0);
  }
  private _handle_blur_2_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(2,2,2);
    const pd_2_0:any = ((<any>this._DefaultValueAccessor_2_3.context.onTouched()) !== false);
    return (true && pd_2_0);
  }
  private _handle_input_11_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(11,7,6);
    const pd_11_0:any = ((<any>this._DefaultValueAccessor_11_3.context.onChange($event.target.value)) !== false);
    return (true && pd_11_0);
  }
  private _handle_blur_11_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(11,7,6);
    const pd_11_0:any = ((<any>this._DefaultValueAccessor_11_3.context.onTouched()) !== false);
    return (true && pd_11_0);
  }
  private _handle_input_22_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(22,14,6);
    const pd_22_0:any = ((<any>this._DefaultValueAccessor_22_3.context.onChange($event.target.value)) !== false);
    return (true && pd_22_0);
  }
  private _handle_blur_22_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(22,14,6);
    const pd_22_0:any = ((<any>this._DefaultValueAccessor_22_3.context.onTouched()) !== false);
    return (true && pd_22_0);
  }
  private _handle_input_33_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(33,21,6);
    const pd_33_0:any = ((<any>this._DefaultValueAccessor_33_3.context.onChange($event.target.value)) !== false);
    this.debug(33,21,6);
    const pd_33_1:any = ((<any>this._NumberValueAccessor_33_4.context.onChange($event.target.value)) !== false);
    return ((true && pd_33_0) && pd_33_1);
  }
  private _handle_blur_33_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(33,21,6);
    const pd_33_0:any = ((<any>this._DefaultValueAccessor_33_3.context.onTouched()) !== false);
    this.debug(33,21,6);
    const pd_33_1:any = ((<any>this._NumberValueAccessor_33_4.context.onTouched()) !== false);
    return ((true && pd_33_0) && pd_33_1);
  }
  private _handle_change_33_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(33,21,6);
    const pd_33_0:any = ((<any>this._NumberValueAccessor_33_4.context.onChange($event.target.value)) !== false);
    return (true && pd_33_0);
  }
  private _handle_click_41_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(41,27,52);
    const pd_41_0:any = ((<any>this.context.onSubmit.next(this.context.form.value)) !== false);
    return (true && pd_41_0);
  }
}
export function viewFactory_ProductFormComponent0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<import0.ProductFormComponent> {
  if ((renderType_ProductFormComponent === (null as any))) { (renderType_ProductFormComponent = viewUtils.createRenderComponentType('/Users/peterdickten/versioned/dcs-food-order/src/app/products/product-form/product-form.component.html',0,import10.ViewEncapsulation.None,styles_ProductFormComponent,{})); }
  return new _View_ProductFormComponent0(viewUtils,parentInjector,declarationEl);
}