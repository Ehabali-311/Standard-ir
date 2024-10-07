import React from 'react'
import { useTranslation } from 'react-i18next';
import './CorporateActions.css'
const CorporateActions = ({data}) => {
  const { t , i18n } = useTranslation();
  const lang = i18n.language;
  const corprate = data?.cpaitalSummary || [];
  return (
    <>
       <div className="card">
      <div className="card-header mb-1">
        {t("overviewPage.corporateActions.title")}
      </div>
      <div className='card-body '>
      <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button
                className={`nav-link active`}
              >
                {t("overviewPage.corporateActions.recentChanges")}
              </button>
            </li>
        </ul>
      <table className="table table-responsive table-hover">
      <tbody className='fs-14'>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.previousCapital")}</th>
                <td className='text-muted'>
                  {corprate.currentCapital} {lang === 'ar' ? `( ${corprate.measuringUnitNameAr} ${corprate.currencyNameAr} )`: `( ${corprate.measuringUnitNameEn} ${corprate.currencyNameEn} )`}
                </td>
                </tr>
                <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.previousNoShares")}</th>
                <td className='text-muted'>{corprate.currentShares}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.capitalChange")}</th>
                <td className='text-muted'>{`${corprate.bonusShares} %`}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.currentCapital")}</th>
                <td className='text-muted'>{corprate.newCapital}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.currentNoShares")}</th>
                <td className='text-muted'>{corprate.newShares}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.type")}:</th>
                <td>{lang === 'en' ? corprate.companyCapitalStatusNameEn : corprate.companyCapitalStatusNameAr}</td>
              </tr>
              <tr className="border-bottom">
                <th>{t("overviewPage.corporateActions.announcedDate")}</th>
                <td className='text-muted'>{corprate.announcedDate.split("T")[0]}</td>
              </tr>
            </tbody>
      </table>
      <div>
          <button className="btn btn-bg w-100 d-flex justify-content-end align-items-center bg-body-tertiary">
            {`${t("more")}`}
          </button>
        </div>
        </div>
    </div>   
    </>
  )
}

export default CorporateActions
