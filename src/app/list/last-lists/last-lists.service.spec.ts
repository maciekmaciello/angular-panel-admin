/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LastListsService } from './last-lists.service';

describe('Service: LastLists', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastListsService]
    });
  });

  it('should ...', inject([LastListsService], (service: LastListsService) => {
    expect(service).toBeTruthy();
  }));
});
