import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  imagePath: string;
  landImage: string;
  constructor() {
    this.imagePath = './assets/icon/ey-white-logo.png';
    this.landImage='./assets/icon/ev_bike.png';
  }
  }


