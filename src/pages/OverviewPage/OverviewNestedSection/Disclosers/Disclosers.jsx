import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Disclosers = ({ data }) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const discloserData = data?.discloser;
    return (
      <div className="card">
        <div className="card-header">{t("overviewPage.disclosers.title")}</div>
        <hr className="m-2 mb-0 border-0"></hr>
        <div className="container-lg table-responsive p-0 px-1">
          <table className="table hover fs-14">
            <tbody>
              {discloserData?.map((discloserItem, index) => (
                <tr key={index}>
                  <td>
                    <Link
                    to={`/${lang}/disclosure/${discloserItem.articleID}`}
                      className="text-decoration-none text-black"
                      style={{ cursor: "pointer" }}
                    >
                      {discloserItem.title}
                    </Link>
                    <div className="text-muted">
                      {discloserItem.articleSourceName}
                      <span className="ms-2 text-muted me-2">
                      {discloserItem.publishedOn.split(" ")[0]}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-bg w-100 d-flex justify-content-end align-items-center bg-body-tertiary">
            {`${t("more")}`}
          </button>
        </div>
      </div>
    );
  };
export default Disclosers
