import MarketData from './OverviewNestedSection/MarketData/MarketData';
import FinancialRatio from './OverviewNestedSection/FinancialRatio/FinancialRatio';
import ChartTicker from './OverviewNestedSection/ChartTicker/ChartTicker';
import Earnings from './OverviewNestedSection/Earnings/Earnings';
import LastNews from './OverviewNestedSection/LastNews/LastNews';
import Events from './OverviewNestedSection/Events/Events';
import Disclosers from './OverviewNestedSection/Disclosers/Disclosers';
import CorporateActions from './OverviewNestedSection/CorporateActionPage/CorporateActions';
const OverviewPage = ({data}) => {
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
