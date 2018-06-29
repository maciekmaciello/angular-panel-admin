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
      { name: 'Affiliates', icon: 'fas fa-handshake  fa-sm', url: '/affiliates' },
      { name: 'Marketing Materials', icon: 'fas fa-briefcase fa-sm', url: 'materials/' },
      { name: 'Packages', icon: 'fas fa-box fa-sm', url: 'packages/' },
      { name: 'Withdrawn', icon: 'far fa-money-bill-alt fa-sm', url: 'withdrawn/' },
      { name: 'Affiliates to be verified', icon: 'fas fa-poo fa-sm', url: 'verified/' },
    ];
  }

  ngOnInit() {
  }

}
