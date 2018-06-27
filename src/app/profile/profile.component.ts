import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  title: string;
  accounts: any;

  displayedColumns: string[] = [
    'Email', 'Role', 'Affiliate', 'Created At', 'Active', 'IP Login',
    'Last Activity', 'Starter', '$', '€', 'Actions'
  ];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.title = 'Users';
    this.getUsers();
    this.dataSource = new MatTableDataSource<any>(this.accounts);
    this.dataSource.paginator = this.paginator;
  }

  getUsers(): void {
    this.profileService.getUsers()
      .subscribe(res => this.accounts = res.data.accounts);
  }

}
