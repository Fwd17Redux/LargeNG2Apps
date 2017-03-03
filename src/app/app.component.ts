import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dcs-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('Hello world!');
  }

}
