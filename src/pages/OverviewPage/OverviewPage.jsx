import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getToken } from '../../services/getToken';
import { fetchOverviewData } from '../../services/apis';
import MarketData from './OverviewNestedSection/MarketData/MarketData';
import FinancialRatio from './OverviewNestedSection/FinancialRatio/FinancialRatio';
import ChartTicker from './OverviewNestedSection/ChartTicker/ChartTicker';
import { useTranslation } from 'react-i18next';
import Earnings from './OverviewNestedSection/Earnings/Earnings';
import LastNews from './OverviewNestedSection/LastNews/LastNews';
import Events from './OverviewNestedSection/Events/Events';
import Disclosers from './OverviewNestedSection/Disclosers/Disclosers';
import CorporateActions from './OverviewNestedSection/CorporateActionPage/CorporateActions';
import { jwtDecode } from 'jwt-decode';

const OverviewPage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

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
  const { data, isLoading } = useQuery({
    queryKey: ["overview" , currentLanguage],
    queryFn: () => fetchOverviewData( currentLanguage),
    enabled: !!handleTokenError(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-2">
      <div className="col-12">
        <div className="row ">
          <div className="col-xs-12 col-lg-6 ">
            <ChartTicker data={data}/>
            <LastNews data={data}/>
            <Earnings data={data}/>
            <Disclosers data={data}/>
          </div>
          <div className="col-xs-12 col-lg-6 ">
            <MarketData data={data}/>
          <FinancialRatio data={data}/>
          <Events data={data}/>
          <CorporateActions data={data}/>
          </div>
        </div>
      </div>
  </div>
  );
};

export default OverviewPage;
