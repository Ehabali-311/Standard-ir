import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NewDetails = ({data , isLoading}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const newsItem = data?.latestNews?.find(
    (news) => news.articleID.toString() === id
  );
  
  useEffect(() => {
    if (!isLoading && !newsItem) {
      navigate("/"); 
    }
  }, [newsItem, isLoading, navigate]); 

  useEffect(() => {
    const sendHeight = () => {
      const height = document.body.scrollHeight ;
      window.parent.postMessage({ height }, '*'); 
    };

    sendHeight();
    window.addEventListener('resize', sendHeight);

    return () => {
      window.removeEventListener('resize', sendHeight);
    };
  }, []);

  if (!newsItem) {
    return (
      <div className="container mt-2">
        <h4 className="my-3">News item not found.</h4>
      </div>
    );
  }

  return (
<>
    <div className="container mt-2">
    <div className="d-flex justify-content-between mb-2">
      <h4 className="my-3 fw-bold">{newsItem.title}</h4>
    </div>
    <div dangerouslySetInnerHTML={{ __html: newsItem.body }} />
  </div>
    </>
  );
};

export default NewDetails;
