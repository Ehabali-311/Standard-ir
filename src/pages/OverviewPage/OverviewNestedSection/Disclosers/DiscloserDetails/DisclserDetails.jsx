import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import {  useNavigate, useParams } from 'react-router-dom';

const DisclserDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
 const navigate = useNavigate();
  const currentLanguage = i18n.language;

  const { data } = useQuery({
    queryKey: ["overview", currentLanguage],
    queryFn: () => fetchOverviewData(currentLanguage),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const discloserItem = data?.discloser?.find(
    (dis) => dis.articleID.toString() === id
  );

  useEffect(() => {
    if (!discloserItem) {
      navigate("/"); 
    }
  }, [discloserItem, navigate]); 

  if (!discloserItem) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    );
  }

  return (
    <div className="container mt-2">
      <h4 className="my-3">{discloserItem.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: discloserItem.body }} />
    </div>
  );
};

export default DisclserDetails
