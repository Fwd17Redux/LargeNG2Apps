import { NgModule } from '@angular/core';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { routes } from './calculator.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [],
  declarations: [CalculatorPageComponent],
  providers: [],
})
export class CalculatorModule { }
