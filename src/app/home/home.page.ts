import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  state = false;

  constructor() {}

  toggle() {
    this.state = !this.state;
  }

}
