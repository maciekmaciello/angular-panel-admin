import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  styleUrls: ['./affiliates.component.scss']
})
export class AffiliatesComponent implements OnInit {
  title: string;
  menuAff: string[];
  constructor() {
    this.title = 'Affiliates';
    this.menuAff = ['Affiliates', 'Marketing Materials', 'Packages',
      'Withdrawn', 'Affiliates to be verified']
  }

  ngOnInit() {
  }

}
