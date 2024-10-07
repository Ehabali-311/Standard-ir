
import axios from 'axios';

export const fetchOverviewData = async ( lang) => {
  if (!localStorage.getItem("accessToken")) {
    throw new Error("No access token available");
  }
  
  const response = await axios.get(`https://data-ir.argaam.com/api/v1/json/ir-api/overview/${lang}?limit=4`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};
export const ferchChartData = async ( time) => {
  if (!localStorage.getItem("accessToken")) {
    throw new Error("No access token available");
  }
  
  const response = await axios.get(`https://data-ir.argaam.com/api/v1/json/ir-api/charts-data/0/${time}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  
  return response.data;
};
