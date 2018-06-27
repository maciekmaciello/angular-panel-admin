import { Injectable } from '@angular/core';
import chart from 'tui-chart';
import map from 'tui-chart/maps/world';

@Injectable({
  providedIn: 'root'
})
export class TuiChartService {

  constructor() { }

  columnChart(elem, chartSettings, data) {
    chart.registerTheme('newTheme', chartSettings.theme);
    chart.columnChart(elem, data, chartSettings.options);
  }

}
