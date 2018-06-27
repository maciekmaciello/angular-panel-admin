import { TuiChartService } from '../../services/tui-chart.service';


const sTuiChart = Symbol('tuiChart');
const sChartElem = Symbol('chartElem');
const sChartSettings = Symbol('chartSettings');
const sSetCategories = Symbol('setCategories');
const sSetSeries = Symbol('setSeries');

export class Chart {
  month: string[];

  constructor(elem) {
    this[sTuiChart] = new TuiChartService();
    this[sChartElem] = elem;
    this.month = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    this[sChartSettings] = {
      options: {
        theme: 'newTheme',
        chart: {
          width: this[sChartElem].offsetWidth - 50,
          height: 200,
          format: '0.00'
        },
        yAxis: {
          title: '',
          pointOnColumn: true,
          labelInterval: 5
        },
        xAxis: {
        },
        tooltip: {
          suffix: '&#36;'
        },
        legend: {
          visible: true,
          align: 'bottom'
        },
        chartExportMenu: {
          visible: false
        },
        series: {
          stackType: 'normal',
          barWidth: 60,
        },
      },
      theme: {
        series: {
          colors: ['#414E63', '#E96562'],
        },
        plot: {
          lineColor: 'skyblue',
          background: '#f3f3f3'
        },
        chart: {
          fontWeight: 'bold',
          color: 'blue',
          background: {
            opacity: 0
          }
        }
      }
    };
  }

  [sSetCategories](data) {
    const categories = [];

    data.forEach(i => {
      const date = new Date(i.date);
      const month = date.getMonth();
      const year = date.getFullYear();
      categories.push(`${this.month[month]} ${year}`);
    });
    return categories;
  }

  [sSetSeries](data) {
    const series = [{
      name: 'First Payment',
      data: [],
    },
    {
      name: 'Next Payment',
      data: [],
    }];

    data.forEach(i => {
      const firstAmount = (i.firstDepositAmount / 100).toFixed(2);
      const nextAmount = (i.nextDepositAmount / 100).toFixed(2);
      series[0].data.push(firstAmount);
      series[1].data.push(nextAmount);
    });
    return series;
  }

  renderChart(res) {
    if (res) {
      const data = {
        categories: this[sSetCategories](res),
        series: this[sSetSeries](res),
      };

      this[sTuiChart].columnChart(this[sChartElem], this[sChartSettings], data);
    }
  }


}
