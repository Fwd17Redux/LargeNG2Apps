import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dcs-calculator-page',
  templateUrl: './calculator-page.component.html'
})
export class CalculatorPageComponent implements OnInit {
  constructor() { }

  private x: string = '';
  private y: string = '';
  private z: string = '';

  add() {
    console.log('add', this);
    this.z = (parseInt(this.x) + parseInt(this.y)).toString(10);
  }

  mult() {
    console.log('mult', this);
    this.z = (parseInt(this.x) * parseInt(this.y)).toString(10);
  }

  ngOnInit() {
  }
}
