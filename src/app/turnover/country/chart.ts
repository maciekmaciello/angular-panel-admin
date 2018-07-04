
const sTuiChart = Symbol('tuiChart');
const sChartElem = Symbol('chartElem');
const sChartSettings = Symbol('chartSettings');
const sSetCategories = Symbol('setCategories');
const sSetSeries = Symbol('setSeries');

export class Chart {
  month: string[];

  constructor() {
    this[sChartSettings] = {
      options: {
        theme: 'newTheme',
        chart: {
          width: '100%',
          height: 600,
          title: 'Country',
          format: '0.00',
        },
        tooltip: {
          suffix: '&#36;'
        },
        map: 'world',
        legend: {
          align: 'bottom'
        }
      },
      theme: {
        series: {
          startColor: '#81c4e6',
          endColor: '#1793d1',
          overColor: '#1793d1'
        },
        chart: {
          background: {
            color: '#ffffff82'
          }
        }
      }
    };
  }

  renderChart() {
    const data = {
      series: [
        {
          code: 'PL',
          data: 50
        },
        {
          code: 'AF',
          data: 48
        },
        {
          code: 'BE',
          data: 10
        },
        {
          code: 'GB',
          data: 61
        },
        {
          code: 'DE',
          data: 33
        }
      ]
    };

    return {
      chartSettings: this[sChartSettings],
      data
    };
  }


}
