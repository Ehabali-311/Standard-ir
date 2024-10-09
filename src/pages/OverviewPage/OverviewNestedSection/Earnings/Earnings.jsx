import React from "react";
import "./Earnings.css";
import { useTranslation } from "react-i18next";
const Earnings = ({ data }) => {
    const { t ,  i18n } = useTranslation();
  const language = i18n.language;
  const earnings = data?.earnings;
  return (
    <>
      <div className="card">
        <div className="card-header">{t("overviewPage.earnings.title")}</div>
        <hr className="m-2 mb-0 border-0"></hr>
        <div className="container-lg table-responsive p-0">
          <table className="table hover fs-14">
            <thead className="text-muted fw-bold bg-body-tertiary">
              <tr >
                <th className="bg-head">{t("overviewPage.earnings.report")}</th>
                <th className="bg-head">{t("overviewPage.earnings.interim")}</th>
                <th className="bg-head">{t("overviewPage.earnings.year")}</th>
              </tr>
            </thead>
            <tbody>
              {earnings?.slice(0, 4).map((earn, index) => {
                return (
                  <tr key={index}>
                      <td>
                      <a className="text-decoration-none text-dark" href={language === 'ar' ? earn.fileURLAr : earn.fileURLEn}  target="_blank" rel="noopener noreferrer">
                        {earn?.title}
                      </a>
                    </td>
                    <td>{t(`overviewPage.earnings.fiscalPeriods.${earn?.fiscalValue}`)}</td>
                    <td>{earn?.forYear}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <button className="btn btn-bg w-100 d-flex justify-content-end align-items-center bg-body-tertiary">
              {`${t("more")}`}
              {/* <i className={language === "ar" ? "fa-solid fa-angle-left me-2" : "fa-solid fa-angle-right ms-2"}></i> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Earnings;
