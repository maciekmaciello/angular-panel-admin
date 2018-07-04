import { Component, OnInit } from '@angular/core';
import { VerifiedService } from './verified.service';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html', 
  styleUrls: ['./verified.component.scss']
})
export class VerifiedComponent implements OnInit {

  affiliates: any;

  constructor(private verifiedService: VerifiedService) { }

  ngOnInit() {
    this.getAffiliates();
  }

  getAffiliates(): void {
    this.verifiedService.getAffiliates()
      .subscribe(res =>
        this.affiliates = res.data.affiliants
      );
    console.log(this.affiliates);
  }

}
