/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LastTransactionsService } from './last-transactions.service';

describe('Service: LastTransactions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastTransactionsService]
    });
  });

  it('should ...', inject([LastTransactionsService], (service: LastTransactionsService) => {
    expect(service).toBeTruthy();
  }));
});
