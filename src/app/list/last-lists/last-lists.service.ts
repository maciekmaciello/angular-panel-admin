import { Injectable } from '@angular/core';
import { Observable, of, generate } from 'rxjs';
import { LAST_LISTS_DATA } from './mock-last-lists';
import { LastList } from './last-lists';

@Injectable({
  providedIn: 'root'
})
export class LastListsService {

  constructor() { }


  getLastLists(): Observable<LastList[]> {
    return of(LAST_LISTS_DATA);
  }
}
