import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AFFILIATES } from './mock-affiliates';
import { AnimationStyleMetadata } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getAffiliates(): Observable<any> {
    return of(AFFILIATES);
  }

}
