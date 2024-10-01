
import axios from 'axios';
export const fetchOverviewData = async (accessToken) => {
  if (!accessToken) {
    throw new Error("No access token available");
  }
  
  const response = await axios.get('https://data-ir.argaam.com/api/v1/json/ir-api/overview', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  
  return response.data;
};
