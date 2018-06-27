/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AffiliateDetailService } from './affiliate-detail.service';

describe('Service: AffiliateDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffiliateDetailService]
    });
  });

  it('should ...', inject([AffiliateDetailService], (service: AffiliateDetailService) => {
    expect(service).toBeTruthy();
  }));
});
