import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LastNews = ({ data }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const news = data?.latestNews;
  return (
    <div className="card">
      <div className="card-header">{t("overviewPage.lastNews.title")}</div>
      <div className="card-body">
        <table className="table table-responsive fs-14">
          <tbody>
            {news?.map((newsItem, index) => (
              <tr key={index}>
                <td>
                  <Link
                    className="text-decoration-none text-black"
                   to={`/${lang}/latestnews/${newsItem.articleID}`}
                    style={{ cursor: "pointer" }}
                  >
                    {newsItem.title}
                  </Link>
                  <div className="text-muted">
                    {newsItem.articleSourceName}
                    <span className="ms-2 text-secondary me-2">
                    {newsItem.publishedOn.split(" ")[0]}
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

export default LastNews;
