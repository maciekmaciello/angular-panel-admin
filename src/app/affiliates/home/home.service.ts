import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AFFILIATES } from './mock-affiliates';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getAffiliates(): Observable<any> {
    return of(AFFILIATES);
  }

}
