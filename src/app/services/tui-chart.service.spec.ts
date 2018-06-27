/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TuiChartService } from './tui-chart.service';

describe('Service: TuiChart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuiChartService]
    });
  });

  it('should ...', inject([TuiChartService], (service: TuiChartService) => {
    expect(service).toBeTruthy();
  }));
});
