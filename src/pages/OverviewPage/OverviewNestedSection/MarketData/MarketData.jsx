import React from "react";
import "./MarketData.css";
import { useTranslation } from "react-i18next";
import { formatValue } from "../../../../utils/Helpers";
const MarketData = ({ data }) => {
  const { t } = useTranslation();
  const marketData = data?.companyStockSummary;

  const closeValue = formatValue(marketData?.closeValue);
  const volume = formatValue(marketData?.volume);
  const change = formatValue(marketData?.change);
  const amount = formatValue(marketData?.amount);
  const percentageChange = formatValue(marketData?.percentageChange);
  const contractCount = formatValue(marketData?.contractCount);
  const openValue = formatValue(marketData?.openValue);
  const marketValue = formatValue(marketData?.marketValue);
  const low = formatValue(marketData?.low);
  const avgVolume3Months = formatValue(marketData?.avgVolume3Months);
  const high = formatValue(marketData?.high);
  const avgTurnover3Months = formatValue(marketData?.avgTurnover3Months);
  const previousCloseValue = formatValue(marketData?.previousCloseValue);
  const avgTransactions3Months = formatValue(marketData?.avgTransactions3Months);
  const month3Change = formatValue(marketData?.month3Change);
  const ytdChange = formatValue(marketData?.ytdChange);
  const month6Change = formatValue(marketData?.month6Change);

  return (
    <>
      <div className="card">
        <div className="card-header">
          {t("overviewPage.marketData.marketTitle")}
        </div>
        <div className="px-1">
          <table className="table table-hover table-responsive table-borderless fs-14">
            <tbody>
              <tr className="border-bottom">
                <th>{t("overviewPage.marketData.lastTrade")}</th>
                <td className={closeValue.colorClass}>
                  {closeValue.formattedValue}
                </td>
                <th>{t("overviewPage.marketData.volume")}</th>
                <td className={volume.colorClass}>{volume.formattedValue}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.marketData.change")}</th>
                <td className={change.suceesClass}>{change.formattedValue}</td>
                <th>{t("overviewPage.marketData.turnover")}</th>
                <td className={amount.colorClass}>{amount.formattedValue}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.marketData.changePercent")}</th>
                <td className={percentageChange.suceesClass}>
                  {percentageChange.formattedValue}
                </td>
                <th>{t("overviewPage.marketData.transactions")}</th>
                <td className={contractCount.colorClass}>
                  {contractCount.formattedValue}
                </td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.marketData.open")}</th>
                <td className={openValue.colorClass}>
                  {openValue.formattedValue}
                </td>
                <th>{t("overviewPage.marketData.marketValue")}</th>
                <td className={marketValue.colorClass}>
                  {marketValue.formattedValue}
                </td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.marketData.low")}</th>
                <td className={low.colorClass}>{low.formattedValue}</td>
                <th>{t("overviewPage.marketData.avgVolume3Months")}</th>
                <td className={avgVolume3Months.colorClass}>
                  {avgVolume3Months.formattedValue}
                </td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.marketData.high")}</th>
                <td className={high.colorClass}>{high.formattedValue}</td>
                <th>{t("overviewPage.marketData.avgTurnover3Months")}</th>
                <td className={avgTurnover3Months.colorClass}>
                  {avgTurnover3Months.formattedValue}
                </td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.marketData.previousCloseValue")}</th>
                <td className={previousCloseValue.colorClass}>
                  {previousCloseValue.formattedValue}
                </td>
                <th>{t("overviewPage.marketData.avgTransactions3Months")}</th>
                <td className={avgTransactions3Months.colorClass}>
                  {avgTransactions3Months.formattedValue}
                </td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.marketData.month3Change")}</th>
                <td className={month3Change.suceesClass}>
                  {`${month3Change.formattedValue} %`}
                </td>
                <th>{t("overviewPage.marketData.ytdChange")}</th>
                <td className={ytdChange.suceesClass}>
                  {`${ytdChange.formattedValue} %`}
                </td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.marketData.month6Change")}</th>
                <td className={month6Change.suceesClass}>
                  {`${month6Change.formattedValue} %`}
                </td>
                <th>{t("overviewPage.marketData.month12Change")}</th>
                <td className={ytdChange.suceesClass}>
                  {`${ytdChange.formattedValue} %`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MarketData;
