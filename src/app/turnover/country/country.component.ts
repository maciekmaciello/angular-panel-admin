import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Chart } from './chart';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  chart: any;
  chartRender: any;
  typeChart: String = 'map';

  constructor() {
  }

  ngOnInit() {
    this.createChart();
  }

  createChart(): void {
    const chart = new Chart();
    this.chartRender = chart.renderChart();
  }
}
