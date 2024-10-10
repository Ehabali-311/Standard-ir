import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { getToken } from "./getToken";
import { apiConfig } from "./apis";
import { useQuery } from "@tanstack/react-query";

const fetchApiData = async (endpointKey, params) => {
  const api = apiConfig[endpointKey];
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("No access token available");
  }

  const response = await axios({
    method: api.method,
    url: api.url(params),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

const isTokenExpired = (token) => {
    if (!token) return true; 
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; 
    return decodedToken.exp < currentTime; 
  };
  const handleTokenError = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token || isTokenExpired(token)) {
      await getToken();  
    }
    return true;  
  };

export const useApiQuery = (endpointKey, params) => {
    return useQuery({
      queryKey: [endpointKey, params],
      queryFn: () => fetchApiData(endpointKey, params),
      enabled: !!handleTokenError(), 
      refetchOnWindowFocus: false,  
      refetchOnMount: false,         
    });
  };
  