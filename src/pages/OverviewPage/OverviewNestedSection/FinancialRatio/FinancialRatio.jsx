import React from 'react'
import './FinancialRatio.css'
import {  formatValueFinancial } from '../../../../utils/Helpers';
import { useTranslation } from 'react-i18next';
const FinancialRatio = ({ data }) => {
    const {t , i18n } = useTranslation();
    const ratios = data?.financialRatios?.fields || [];
    const lang = i18n.language;
  return (
    <div className="card">
    <div className="card-header">{t("overviewPage.financialRatio.financialRatio")}</div>
    <hr className="m-2 mb-0"></hr>
      <table className="table table-striped table-responsive table-borderless fs-14">
        <tbody>
            {/* <tr>
                <th></th>
                <td>{t("overviewPage.financialRatio.currenct")}</td>
            </tr> */}
        {ratios.map((ratio, index) => {
            const { formattedValue, colorClass } = formatValueFinancial(ratio.values.value);
            return (
              <tr key={index}>
                <th>{lang === 'en' ? ratio.nameEn  : ratio.nameAr}:</th>
                <td className={`${colorClass}`}>
                  {ratio.values.value ? formattedValue : "-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
          <button className="btn btn-bg w-100 d-flex justify-content-end align-items-center bg-body-tertiary px-3">
            {`${t("more")}`}
          </button>
        </div>  
  </div>
  )
}

export default FinancialRatio
