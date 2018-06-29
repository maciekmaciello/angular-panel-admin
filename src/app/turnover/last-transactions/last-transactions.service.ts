import { Injectable } from '@angular/core';
import { Observable, of, generate } from 'rxjs';
import { TransactionElement } from './transaction';
import { TRANSACTIONS } from './mock-transactions';

@Injectable({
  providedIn: 'root'
})
export class LastTransactionsService {

  constructor() { }

  getLastTransactions(): Observable<TransactionElement[]> {
    return of(TRANSACTIONS);
  }

}
