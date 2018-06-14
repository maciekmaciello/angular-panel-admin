import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: { name: string, link: string }[];

  constructor() {
    this.menu = [
      { name: 'Users', link: '/users' },
      { name: 'Affiliates', link: '/affiliates' },
      { name: 'Turnover', link: '/turnover' },
      { name: 'List', link: '/list' },
      { name: 'Statement', link: '/statement' },
      { name: 'Promo', link: '/promo' },
    ];
  }

  ngOnInit() {



  }

}
