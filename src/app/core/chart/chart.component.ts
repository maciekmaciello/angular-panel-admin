import { Component, OnInit, Input } from '@angular/core';
import chart from 'tui-chart';
import map from 'tui-chart/maps/world';
console.log(map);



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  elem: any;
  typeArray: string[] = ['column', 'map'];

  @Input() type: string;
  @Input() dataChart: any;

  constructor() { }

  ngOnInit() {
    this.elem = document.getElementsByClassName('profit-chart')[0];
    this.selectTypeChart(this.type, this.dataChart);
  }

  selectTypeChart(type: string, res: any) {
    switch (type) {
      case this.typeArray[0]: {
        this.columnChart(res);
        break;
      }

      case this.typeArray[1]: {
        this.mapChart(res);
        break;
      }
    }
  }

  columnChart({ chartSettings, data }) {
    chartSettings.options.chart.width = this.elem.offsetWidth,
      chart.registerTheme('newTheme', chartSettings.theme);
    chart.columnChart(this.elem, data, chartSettings.options);
  }

  mapChart({ chartSettings, data }) {
    chartSettings.options.chart.width = this.elem.offsetWidth,
      chart.registerTheme('newTheme', chartSettings.theme);
    chart.mapChart(this.elem, data, chartSettings.options);
  }

}
