import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CAMPAIGNS, STATISTICS, CHART } from './mock-affiliate-detail';

@Injectable({
  providedIn: 'root'
})
export class AffiliateDetailService {

  constructor() { }

  getCampaigns(): Observable<any> {
    return of(CAMPAIGNS);
  }

  getStatistics(): Observable<any> {
    return of(STATISTICS);
  }

  getChart(): Observable<any> {
    return of(CHART);
  }

}
