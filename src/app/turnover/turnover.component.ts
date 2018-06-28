import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turnover',
  templateUrl: './turnover.component.html',
  styleUrls: ['./turnover.component.css']
})
export class TurnoverComponent implements OnInit {
  title: String = 'Turnover';
  menuTurnover: any[] = [
    { name: 'Turnover', icon: 'fas fa-hand-holding-usd  fa-sm', url: '/turnover' },
    { name: 'Country', icon: 'fas fa-globe fa-sm', url: 'country/' },
    { name: 'Last Transactions', icon: 'fas fa-chart-line fa-sm', url: 'transactions/' }
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
