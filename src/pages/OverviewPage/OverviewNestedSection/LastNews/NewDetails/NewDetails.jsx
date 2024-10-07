import { useQuery } from '@tanstack/react-query';
import React, { useEffect }  from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

const NewDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["overview", currentLanguage],
    queryFn: () => fetchOverviewData(currentLanguage),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const newsItem = data?.latestNews?.find(
    (news) => news.articleID.toString() === id
  );
  
  useEffect(() => {
    if (!newsItem) {
      navigate("/"); 
    }
  }, [newsItem, navigate]); 

  if (!newsItem) {
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
      <h4 className="my-3">{newsItem.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: newsItem.body }} />
    </div>
  );
};

export default NewDetails;
