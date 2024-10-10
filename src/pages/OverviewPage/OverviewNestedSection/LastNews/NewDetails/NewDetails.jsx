import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useApiQuery } from '../../../../../services/useApiQuery';

const NewDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate();

  const { data, isLoading } = useApiQuery("overview", currentLanguage);


  const newsItem = data?.latestNews?.find(
    (news) => news.articleID.toString() === id
  );
  
  useEffect(() => {
    if (!isLoading && !newsItem) {
      navigate("/"); 
    }
  }, [newsItem, isLoading, navigate]); 

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="container mt-2">
        <h4 className="my-3">News item not found.</h4>
      </div>
    );
  }

  return (
    <div className="container mt-2">
      <h4 className="my-3 fw-bold">{newsItem.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: newsItem.body }} />
    </div>
  );
};

export default NewDetails;
