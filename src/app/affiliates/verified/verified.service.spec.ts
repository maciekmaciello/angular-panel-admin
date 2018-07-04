/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerifiedService } from './verified.service';

describe('Service: Verified', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifiedService]
    });
  });

  it('should ...', inject([VerifiedService], (service: VerifiedService) => {
    expect(service).toBeTruthy();
  }));
});
