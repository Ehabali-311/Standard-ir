import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOverviewData } from "../../../../../services/apis";
import './DisclserDetails.css';
const DisclserDetails = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language;

  const { data, isLoading } = useQuery({
    queryKey: ["overview", currentLanguage],
    queryFn: () => fetchOverviewData(currentLanguage),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

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

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!discloserItem) {
    return (
      <div className="container mt-2">
        <h4 className="my-3">disclosure item not found.</h4>
      </div>
    );
  }

  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between">
        <h4 className="my-3 fw-bold">{discloserItem.title}</h4>
        <div className="py-3 d-flex flex-column align-items-center icons-collection">
          <h6>{t("overviewPage.disclosers.discloserShares")}</h6>
          <div>
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
