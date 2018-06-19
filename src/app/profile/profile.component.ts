import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Users';
  }

  ngOnInit() {
    console.log('zaq');
  }

}
