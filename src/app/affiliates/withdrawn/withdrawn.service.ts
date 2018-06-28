import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PAYOUT } from './mock-withdrawn';

@Injectable({
  providedIn: 'root'
})
export class WithdrawnService {

  constructor() { }

  getPayout(): Observable<any> {
    return of(PAYOUT);
  }
}
