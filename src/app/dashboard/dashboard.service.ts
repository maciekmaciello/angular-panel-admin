import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TOTAL } from './mock-total';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getTotal(): Observable<object> {
    return of(TOTAL);
  }

}
