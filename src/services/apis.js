
export const apiConfig = {
  overview: {
    url: (lang) => `https://data-ir.argaam.com/api/v1/json/ir-api/overview/${lang}?limit=4`,
    method: 'GET'
  },
  chartData: {
    url: (time) => `https://data-ir.argaam.com/api/v1/json/ir-api/charts-data/0/${time}`,
    method: 'GET'
  },
};
