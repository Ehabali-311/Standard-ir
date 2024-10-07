import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next';
const Footer = () => {
const {t } = useTranslation();
  return (
    <>
      <footer className="bg-body-tertiary text-center text-sm-start sticky-bottom">
  <div className="text-center p-3">
    <span > {t("footer")}</span>
    <a className="mx-2" target="_blank" href="https://www.argaam.com/">Argaam.com</a>
  </div>
</footer>
    </>
  )
}

export default Footer
