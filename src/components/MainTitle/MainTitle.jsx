import React from 'react'
import './MainTitle.css'
import { useTranslation } from 'react-i18next';
const MainTitle = () => {
    const {t} = useTranslation();
  return (
    <div className="container-lg bg-white pb-2 border-bottom ">
       <div className="d-flex">
         <div className="bg-light rounded text-center d-flex justify-content-center align-items-center">
          <span className="display-font">1820</span>
        </div>
      <div className='ms-2 mt-2'>
    <h3 className="mb-1 fw-bold">{t('overviewPage.title')}</h3>
        <div className="d-flex align-items-start justify-content-start">
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
