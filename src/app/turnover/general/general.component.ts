import { Component, OnInit } from '@angular/core';
import { AffiliateElement } from './affiliate';
import { AffiliateProfitElement } from './affiliate-profit';
import { GeneralService } from './general.service';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  activeTable = 'top10';

  ELEMENT_DATA: AffiliateElement[];
  ELEMENT_PROFIT: AffiliateProfitElement[];

  displayedColumns: string[] = ['email', 'leads', 'profit', 'campaigns'];
  displayedProfitColumns: string[] = ['email', 'dayly', 'weekly', 'yearly'];
  dataSource;
  profitSource;
  statistics;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.getTopAffiliates();
    this.getAffilaitesProfit();
    this.getStatistics();
  }

  getTopAffiliates() {
    this.generalService.getTopAffiliates()
      .subscribe(res => this.ELEMENT_DATA = res);
    this.dataSource = this.ELEMENT_DATA;
  }

  getAffilaitesProfit() {
    this.generalService.getAffiliatesProfit()
      .subscribe(res => this.ELEMENT_PROFIT = res);
    this.profitSource = this.ELEMENT_PROFIT;
    console.log(this.profitSource);
  }

  getStatistics() {
    this.generalService.getGeneralStatistics()
      .subscribe(res => this.statistics = res);
  }

  changeActivateTable(tableName) {
    this.activeTable = tableName;
    console.log(this.activeTable);
  }

}
