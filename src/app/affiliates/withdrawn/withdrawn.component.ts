import { Component, OnInit } from '@angular/core';
import { WithdrawnService } from './withdrawn.service';


@Component({
  selector: 'app-withdrawn',
  templateUrl: './withdrawn.component.html',
  styleUrls: ['./withdrawn.component.scss']
})
export class WithdrawnComponent implements OnInit {

  constructor(private withdrawnService: WithdrawnService) { }

  payout: any;
  displayedColumns: string[] = ['Created At', 'Transaction ID', 'Email',
    'Amount', 'Status'];

  ngOnInit() {
    this.getPayout();
  }

  getPayout(): void {
    this.withdrawnService.getPayout()
      .subscribe(res =>
        this.payout = res.data.payout
      );
  }

}
