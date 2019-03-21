import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      img: 'assets/img/mujer.svg',
      titulo: 'Visible Changes<br>in 3 weeks'
    },
    {
      img: 'assets/img/pastel.svg',
      titulo: 'Forget about<br>strict diet'
    },
    {
      img: 'assets/img/dinero.svg',
      titulo: 'Save money on<br>gym membership'
    }
  ];


  constructor() {

  }

}

