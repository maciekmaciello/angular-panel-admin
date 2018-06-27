import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  emailLogin: string;
  menu: { name: string, link: string }[];

  constructor() {
  }

  ngOnInit() {
    this.emailLogin = 'admin@test.com';
    this.menu = [
      { name: 'Users', link: '/users' },
      { name: 'Affiliates', link: '/affiliates' },
      { name: 'Turnover', link: '/turnover' },
      { name: 'List', link: '/list' },
      { name: 'Statement', link: '/statement' },
      { name: 'Promo', link: '/promo' },
    ];


  }

}
