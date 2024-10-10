import React from "react";
import "./MainTitle.css";
import { useTranslation } from "react-i18next";
import { formatValue } from "../../utils/Helpers";
const MainTitle = ({data}) => {
  const { t } = useTranslation();
  const marketDataTitle = data?.companyStockSummary ;
  const closeValue = marketDataTitle ? formatValue(marketDataTitle?.closeValue) : { formattedValue: '', colorClass: '' };
  const change = marketDataTitle ? formatValue(marketDataTitle?.change) : { formattedValue: '', suceesClass: '' };
  const percentageChange = marketDataTitle ? formatValue(marketDataTitle?.percentageChange) : { formattedValue: '', suceesClass: '' };
  const arrowIconClass =
    percentageChange.suceesClass === "text-success"
      ? "fa-circle-arrow-up text-success"
      : "fa-circle-arrow-down text-danger";

  return (
    <div className="container-lg bg-white mb-2 ">
      <div className="d-flex border-bottom flex-wrap">
        <div className="bg-light p-3 fs-4 fw-bold text-secondary d-flex align-items-center">
          <span className="dynamicTitle ">1820</span>
        </div>
        <div className="px-lg-3 fs-5 fw-bold" style={{ width: "85%" }}>
          <h3 className="dynamicTitle fw-bold main-title">
            {t("overviewPage.title")}
          </h3>
          <div className="d-flex align-items-start justify-content-start dynamicTitle">
            <span className={`${closeValue.colorClass} h4 mb-0 mx-2 fw-bold `}>
              {closeValue.formattedValue}
            </span>
            <span className={`${change.suceesClass} h4 mb-0 fw-bold mx-1`}>
            {marketDataTitle && (
                <i className={`fa-solid mx-2 ${arrowIconClass} fa-sm`}></i>
              )}
              {change.formattedValue}
            </span>
            <span
              className={`${percentageChange.suceesClass} mx-1 h4 mb-0 fw-bold `}
            >{marketDataTitle && `${percentageChange.formattedValue} %`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
