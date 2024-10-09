import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CorporateActions.css';

const CorporateActions = ({ data }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const corporate = data?.cpaitalSummary || [];
  const otherData = data?.dividandInfo || [];
    const [selectedTab, setSelectedTab] = useState('recentChanges'); 
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    if (selectedTab === 'recentChanges') {
      return (
        <div className="table-responsive p-0">
          <table className="table hover">
            <tbody className='fs-14'>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.previousCapital")}</th>
                <td className='text-dark'>
                  {corporate.currentCapital} {lang === 'ar' ? `( ${corporate.measuringUnitNameAr} ${corporate.currencyNameAr} )` : `( ${corporate.measuringUnitNameEn} ${corporate.currencyNameEn} )`}
                </td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.previousNoShares")}</th>
                <td className='text-dark'>{corporate.currentShares}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.capitalChange")}</th>
                <td className='text-dark'>{`${corporate.bonusShares} %`}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.currentCapital")}</th>
                <td className='text-dark'>{corporate.newCapital}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.currentNoShares")}</th>
                <td className='text-dark'>{corporate.newShares}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.type")}:</th>
                <td>{lang === 'en' ? corporate.companyCapitalStatusNameEn : corporate.companyCapitalStatusNameAr}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.announcedDate")}</th>
                <td className='text-dark'>{corporate.announcedDate.split("T")[0]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    else if (selectedTab === 'otherData') {
      return (
        <div className="table-responsive p-0">
        <table className="table hover">
          <tbody className='fs-14'>
            <tr className="border-bottom">
              <th>{t("overviewPage.corporateActions.capital")}</th>
              <td className='text-dark'>
                {otherData.capital}
              </td>
            </tr>
            <tr className="border-bottom">
              <th>{t("overviewPage.corporateActions.shares")}</th>
              <td className='text-dark'>{otherData.numberOfShares}</td>
            </tr>
            <tr className="border-bottom">
              <th>{t("overviewPage.corporateActions.divideCapital")}</th>
              <td className='text-dark'>{`${otherData.dividendPercentage} %`}</td>
            </tr>
            <tr className="border-bottom">
              <th>{t("overviewPage.corporateActions.cashDividend")}</th>
              <td className='text-dark'>{otherData.cashDividend} {lang === 'ar' ? `( ${otherData.measuringUnitNameAr} ${otherData.currencyNameAr} )` : `( ${otherData.measuringUnitNameEn} ${otherData.currencyNameEn} )`}</td>
            </tr>
            <tr className="border-bottom">
              <th>{t("overviewPage.corporateActions.DividendPolicy")}</th>
              <td className='text-dark'>{`${otherData.dividendPolicy.split("M")[0]} ${t("overviewPage.corporateActions.months")}`}</td>
            </tr>
            <tr className="border-bottom">
              <th>{t("overviewPage.corporateActions.type")}:</th>
              <td>{lang === 'en' ? otherData.companyDividendStatusNameEn : otherData.companyDividendStatusNameAr}</td>
            </tr>
            <tr className="border-bottom">
              <th>{t("overviewPage.corporateActions.announcedDate")}</th>
              <td className='text-dark'>{otherData.dividendAnnouncedDate.split("T")[0]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      );
    }

    return null; 
  };

  return (
    <>
      <div className="card">
        <div className="card-header mb-1">
          {t("overviewPage.corporateActions.title")}
        </div>
        <hr className="m-2 mb-1"></hr>
        <div className="container-lg mt-3">
          <ul className="nav nav-tabs mb-2">
            <li className="nav-item">
              <button
                className={`nav-link ${selectedTab === 'recentChanges' ? 'actived' : ''}`}
                onClick={() => handleTabClick('recentChanges')}
              >
                {t("overviewPage.corporateActions.recentChanges")}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${selectedTab === 'otherData' ? 'actived' : ''}`}
                onClick={() => handleTabClick('otherData')}
              >
                {t("overviewPage.corporateActions.recentDevidend")}
              </button>
            </li>
          </ul>
          {renderContent()}
        </div>
        <div>
          <button className="btn btn-bg w-100 d-flex justify-content-end align-items-center bg-body-tertiary px-3">
            {`${t("more")}`}
          </button>
        </div>
      </div>
    </>
  );
};

export default CorporateActions;
