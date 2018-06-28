import { Component, OnInit } from '@angular/core';
import { AffiliateElement } from './affiliate';
import { GeneralService } from './general.service';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  ELEMENT_DATA: AffiliateElement[];

  displayedColumns: string[] = ['email', 'leads', 'profit', 'campaigns'];
  dataSource;
  statistics;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.getTopAffiliates();
    this.getStatistics();
  }

  getTopAffiliates() {
    this.generalService.getTopAffiliates()
      .subscribe(res => this.ELEMENT_DATA = res);
    this.dataSource = this.ELEMENT_DATA;
  }

  getStatistics() {
    this.generalService.getGeneralStatistics()
      .subscribe(res => this.statistics = res);
  }

}
