import React from 'react'
import NotFoundLogo from '../../assets/empty.svg'
import { useTranslation } from 'react-i18next';
const NotFound = () => {
    const {t} = useTranslation();
  return (
    <>
      <div className="container">
      <h6 className='text-center mt-5 mb-3'>{t('notFound')}</h6>
        <div className="d-flex justify-content-center align-items-center">
        <img src={NotFoundLogo} className='w-25' alt="not found"/>
        </div>
      </div>
    </>
  )
}

export default NotFound
