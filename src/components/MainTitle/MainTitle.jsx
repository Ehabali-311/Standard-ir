import React from 'react'
import './MainTitle.css'
import { useTranslation } from 'react-i18next';
const MainTitle = () => {
    const {t} = useTranslation();
  return (
    <div className="container-lg bg-white mb-2 ">
       <div className="d-flex border-bottom flex-wrap">
         <div className="bg-light p-3 fs-4 fw-bold text-secondary d-flex align-items-center">
          <span className="dynamicTitle ">1820</span>
        </div>
      <div className='px-lg-3 fs-5 fw-bold' style={{width:'85%'}}>
    <h3 className="dynamicTitle fw-bold main-title">{t('overviewPage.title')}</h3>
        <div className="d-flex align-items-start justify-content-start dynamicTitle">
        <span className="h4 mb-0 me-2 fw-bold">2.51 <i className="fa-solid fa-circle-arrow-up fa-sm text-success ms-1"></i></span>
        <span className="h4 mb-0 fw-bold text-success">(0.02)</span>
          <span className=" ms-2 h4 mb-0 fw-bold text-success">(0.80%)</span>
        </div>
        </div>
    </div>
  </div>
  )
}

export default MainTitle
