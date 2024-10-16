import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import './DisclserDetails.css';
const DisclserDetails = ({data , isLoading}) => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const discloserItem = data?.discloser?.find(
    (dis) => dis.articleID.toString() === id
  );

  useEffect(() => {
    if (!isLoading && !discloserItem) {
      navigate("/");
    }
  }, [discloserItem, isLoading, navigate]);

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, "_blank");
  };

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      discloserItem.title
    )}%20${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      discloserItem.title
    )}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

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

  if (!discloserItem) {
    return (
      <div className="container mt-2">
        <h4 className="my-3">disclosure item not found.</h4>
      </div>
    );
  }

  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between mb-2">
        <h4 className="my-3 fw-bold">{discloserItem.title}</h4>
        <div className="py-2 d-flex flex-column align-items-center icons-collection">
          <h6>{t("overviewPage.disclosers.discloserShares")}</h6>
          <div className="d-flex justify-content-center align-items-center px-1">
            <a  onClick={shareOnFacebook} >
         <i className="fa-brands fa-facebook fa-xl me-2" aria-hidden="true"></i>
            </a>
            <a onClick={shareOnWhatsApp}>
          <i className="fa-brands fa-whatsapp fa-xl me-2"  aria-hidden="true"></i>
            </a>
            <a onClick={shareOnTwitter}  >
         <i className="fa-brands fa-twitter fa-xl me-2" aria-hidden="true"></i>
            </a>
            <a onClick={shareOnLinkedIn}>
          <i className="fa-brands fa-linkedin fa-xl me-2"  aria-hidden="true"></i>
            </a>
            <a onClick={copyToClipboard} >
         <i className="fa-regular fa-copy fa-xl me-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: discloserItem.body }} />
    </div>
  );
};

export default DisclserDetails;
