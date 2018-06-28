/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WithdrawnService } from './withdrawn.service';

describe('Service: Withdrawn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WithdrawnService]
    });
  });

  it('should ...', inject([WithdrawnService], (service: WithdrawnService) => {
    expect(service).toBeTruthy();
  }));
});
