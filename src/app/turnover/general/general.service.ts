import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AffiliateElement } from './affiliate';
import { AffiliateProfitElement } from './affiliate-profit';
import { ELEMENT_DATA } from './mock-general';
import { ELEMENT_PROFIT } from './mock-general';
import { GENERAL_STATISTICS } from './mock-general-statistics';

@Injectable()
export class GeneralService {

  constructor() { }

  getTopAffiliates(): Observable<AffiliateElement[]> {
    return of(ELEMENT_DATA);
  }

  getGeneralStatistics() {
    return of(GENERAL_STATISTICS);
  }

  getAffiliatesProfit(): Observable<AffiliateProfitElement[]> {
    return of(ELEMENT_PROFIT);
  }

}
