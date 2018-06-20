import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  styleUrls: ['./affiliates.component.scss']
})
export class AffiliatesComponent implements OnInit {
  title: string;
  menuAff: any[];
  constructor() {
    this.title = 'Affiliates';
    this.menuAff = [
      { name: 'Affiliates', icon: 'fas fa-handshake  fa-sm' },
      { name: 'Marketing Materials', icon: 'fas fa-briefcase fa-sm' },
      { name: 'Packages', icon: 'fas fa-box fa-sm' },
      { name: 'Withdrawn', icon: 'far fa-money-bill-alt fa-sm' },
      { name: 'Affiliates to be verified', icon: 'fas fa-poo fa-sm' },

    ];
  }

  ngOnInit() {
  }

}
