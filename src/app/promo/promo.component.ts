import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Promo Code';
  }

  ngOnInit() {
  }

}
