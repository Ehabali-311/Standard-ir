import "./Sidebar.css";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const {t ,i18n} = useTranslation();
    const lang = i18n.language;
    const location = useLocation();
    const navigate = useNavigate();
  const toggleLanguage = () => {
        const newLang = lang === "en" ? "ar" : "en";
       const newPath= location.pathname.replace(`/${lang}`, `/${newLang}`);
        i18n.changeLanguage(newLang);
        navigate(newPath);
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg  justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar"
        >
          <i className="fa-solid fa-list navbar-toggler-icon"></i>
        </button>
      </nav>
      <div
        className={`offcanvas-lg ${lang === 'ar' ? 'offcanvas-end' : 'offcanvas-start'}`}
          tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-start"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasSidebar"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
        <ul className="nav flex-column px-2 border bg-tertiary">
        <li className="nav-item">
          <NavLink
           className= "nav-link"
            to={`/${lang}`}
            end
          >
            {t("sidebar.overview")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/profile`}
          >
            {t("sidebar.profile")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/boardmangagement`}
          >
            {t("sidebar.boardManagement")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/shareperformance`}
          >
            {t("sidebar.sharePerformance")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/financialinformation`}
          >
            {t("sidebar.financialinformation")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/investorspresentation`}
          >
            {t("sidebar.investorsPresentation")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/disclosures`}
          >
            {t("sidebar.disclosures")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/corprateactions`}
          >
            {t("sidebar.corporateActions")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/majorshareholders`}
          >
            {t("sidebar.majorShareholders")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/businesssegment`}
          >
            {t("sidebar.businessSegments")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/projects`}
          >
            {t("sidebar.projects")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/mergers`}
          >
            {t("sidebar.mergers")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className= "nav-link"
            to={`/${lang}/contacts`}
          >
            {t("sidebar.contacts")}
          </NavLink>
        </li>
      </ul>
        <div className="p-1">
        <button className='btn btn-lang w-100 mt-3' onClick={toggleLanguage}>{lang === 'en' ? 'العربية' : 'English'}</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
