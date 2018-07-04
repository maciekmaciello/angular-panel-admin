import { Component, OnInit } from '@angular/core';
import { LastListsService } from './last-lists.service';

@Component({
  selector: 'app-last-lists',
  templateUrl: './last-lists.component.html',
  styleUrls: ['./last-lists.component.scss']
})
export class LastListsComponent implements OnInit {
  lastLists;
  constructor(private lastListService: LastListsService) { }

  ngOnInit() {
    this.getLastLists();
  }

  getLastLists() {
    this.lastListService.getLastLists()
      .subscribe(res => this.lastLists = res);
    console.log(this.lastLists)
  }

}
