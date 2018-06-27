import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  title: string;
  total: object;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.title = 'Dashboard';
    this.getTotal();
  }

  getTotal(): void {
    this.dashboardService.getTotal()
      .subscribe(total => this.total = total);
  }

}
