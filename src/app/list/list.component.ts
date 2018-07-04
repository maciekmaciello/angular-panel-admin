import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title: String = 'List Mode';
  menuLists: any[] = [
    { name: 'Last lists', icon: 'fas fa-envelope  fa-sm', url: '/list' },
    { name: 'Current lists', icon: 'fas fa-envelope-open fa-sm', url: 'current/' }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
