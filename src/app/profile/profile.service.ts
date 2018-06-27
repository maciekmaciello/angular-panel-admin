import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getUsers(): Observable<any> {
    return of(USERS);
  }

}
