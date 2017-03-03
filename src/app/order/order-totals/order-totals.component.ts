import { PresentationalComponent } from '../../shared/component/presentational-component';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'dcs-order-totals',
  templateUrl: './order-totals.component.html'
})
export class OrderTotalsComponent extends PresentationalComponent {

  @Input() orderTotalsByUser: Map<string, number>;
  @Input() orderTotal: number;

}
