import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  constructor() { }

  ngOnInit() {
  }

  async goToNextSlide() {
    await this.slides.slideNext();
  }

}
