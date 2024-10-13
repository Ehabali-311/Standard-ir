
export const apiConfig = {
  overview: {
    url: (lang) => `https://data.argaam.com/api/v1/json/ir-api/overview/${lang}?limit=4`,
    method: 'GET'
  },
  chartData: {
    url: (time) => `https://data.argaam.com/api/v1/json/ir-api/charts-data/0/${time}`,
    method: 'GET'
  },
};
