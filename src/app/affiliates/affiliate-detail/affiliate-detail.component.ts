import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AffiliateDetailService } from './affiliate-detail.service';

@Component({
  selector: 'app-affiliate-detail',
  templateUrl: './affiliate-detail.component.html',
  styleUrls: ['./affiliate-detail.component.scss']
})
export class AffiliateDetailComponent implements OnInit {
  title: string;
  ID: number;
  campaigns: any;
  profit: any;
  statistics: any;
  chart: any;

  constructor(
    private route: ActivatedRoute,
    private affiliateDetailService: AffiliateDetailService
  ) {
    this.title = 'Affiliates Detail';
  }

  ngOnInit() {
    this.readParams();
    this.getCampaigns();
    this.getStatistics();
    this.getChart();
  }

  readParams(): void {
    this.route.params.subscribe(params => {
      this.ID = params.id;
    });
  }

  getCampaigns(): void {
    this.affiliateDetailService.getCampaigns()
      .subscribe(res =>
        this.campaigns = res.data.campaings
      );
  }

  getStatistics(): void {
    this.affiliateDetailService.getStatistics()
      .subscribe(res => {
        this.statistics = res.data.statistics;
        this.profit = res.data.profit;
      });
  }

  getChart(): void {
    this.affiliateDetailService.getChart()
      .subscribe(res =>
        this.chart = res.data
      );
  }

}
