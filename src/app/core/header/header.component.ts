import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: string[];

  constructor() {
    this.menu = [
      'Users', 'Affiliates', 'Turnover', 'List Mode', 'Statement', 'Promo Code'];
  }

  ngOnInit() {



  }

}
