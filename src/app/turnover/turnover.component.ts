import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turnover',
  templateUrl: './turnover.component.html',
  styleUrls: ['./turnover.component.scss']
})
export class TurnoverComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Turnover';
  }

  ngOnInit() {
  }

}
