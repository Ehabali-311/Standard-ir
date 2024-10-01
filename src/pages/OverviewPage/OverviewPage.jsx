import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getToken } from '../../services/getToken';
import { fetchOverviewData } from '../../services/apis';
import MarketData from './OverviewNestedSection/MarketData/MarketData';
// import { ToastContainer } from 'react-toastify';
import FinancialRatio from './OverviewNestedSection/FinancialRatio/FinancialRatio';

const OverviewPage = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  useEffect(() => {
    if (!accessToken) {
      getToken().then(() => {
        const token = localStorage.getItem('accessToken');
        setAccessToken(token);
      });
    }
  }, [accessToken]);

  const { data , isLoading , error} = useQuery({
    queryKey: ["overviewData"],
    queryFn: () => fetchOverviewData(accessToken),
    enabled: !!accessToken,
    // refetchInterval: 150000,
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

  if (error) {
    return (
      <div className='alert alert-danger d-flex justify-content-center align-items-center' role="alert">
        {error.message}
      </div>
    );
  }

  return (
    <div className="mt-2">
      <div className="col-12">
        <div className="row ">
          <div className="col-xs-12 col-lg-6 ">
          </div>
          <div className="col-xs-12 col-lg-6 ">
            <MarketData data={data}/>
          <FinancialRatio data={data}/>
          </div>
        </div>
      </div>
  </div>
  );
};

export default OverviewPage;
