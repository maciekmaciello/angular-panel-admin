import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { LastTransactionsService } from './last-transactions.service';
import { TransactionElement } from './transaction';


@Component({
  selector: 'app-last-transactions',
  templateUrl: './last-transactions.component.html',
  styleUrls: ['./last-transactions.component.css']
})

export class LastTransactionsComponent implements OnInit {
  transactions: TransactionElement[];
  dataSource;

  displayedColumns: string[] = ['username', 'emails_amount', 'createdAt', 'price', 'payment_type'];

  constructor(private lastTransactionsService: LastTransactionsService) { }

  ngOnInit() {
    this.getLastTransactions();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getLastTransactions() {
    this.lastTransactionsService.getLastTransactions()
      .subscribe(res => this.transactions = res);
    this.dataSource = new MatTableDataSource(this.transactions);
  }
}
