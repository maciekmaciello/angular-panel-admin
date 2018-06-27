export const CAMPAIGNS: any = {
  'status': 'success',
  'data': {
    'campaings': [
      {
        'id': 6,
        'name': 'testowa kampania numer 2',
        'createdAt': '2018-06-11T11:50:25.478288Z',
        'status': 'active',
        'packageName': 'General affiliate campaign',
        'packageType': 'percent',
        'bonusAmount': 10,
        'endAt': '0001-01-01T00:00:00Z',
        'earn': 12600,
        'leads': 1,
        'clicks': 1
      }
    ],
    'total': 1
  }
};

export const STATISTICS: any = {
  'status': 'success',
  'data': {
    'statistics': {
      'clicks': 1,
      'leads': 1
    },
    'profit': {
      'monthly': 12600,
      'total': 12600
    }
  }
};


export const CHART: any = {
  'status': 'success',
  'data': [
    {
      'date': '2018-06-01T00:00:00Z',
      'firstDepositAmount': 12600,
      'firstDepositProfit': 1,
      'nextDepositAmount': 0,
      'nextDepositProfit': 0
    }
  ]
};



