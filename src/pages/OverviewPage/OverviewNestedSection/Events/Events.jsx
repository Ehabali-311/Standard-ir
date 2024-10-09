import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Events.css";

const Events = ({ data }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const events = data?.events;
  const modalRef = useRef();
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const modalElement = document.getElementById("eventModal");
    if (modalElement) {
      modalRef.current = new window.bootstrap.Modal(modalElement);
    }
  }, []);
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    modalRef.current.show();
  };
  const handleCloseModal = () => {
    modalRef.current.hide();
    setSelectedEvent(null);
  };

  return (
    <>
      <div className="card">
        <div className="card-header">{t("overviewPage.events.title")}</div>
        <hr className="m-2 mb-0 border-0"></hr>
        <div className="container-lg table-responsive p-0">
          <table className="table hover fs-14">
            <thead className="text-muted fw-bold">
              <tr>
                <th className="bg-head">{t("overviewPage.events.date")}</th>
                <th className="bg-head">{t("overviewPage.events.event")}</th>
                <th  className="text-center bg-head">
                  {t("overviewPage.events.venue")}
                </th>
              </tr>
            </thead>
            <tbody>
              {events?.slice(0, 5).map((event, index) => {
                return (
                  <tr key={index}>
                    <td>{event.occursOn.split("T")[0]}</td>
                    <td>
                      <a
                        className="text-decoration-none text-dark"
                        onClick={() => handleEventClick(event)}
                      >
                        {language === "ar"
                          ? event.typeNameAr
                          : event.typeNameEn}
                      </a>
                    </td>
                    <td className="text-center">
                      {language === "ar"
                        ? event.eventLocationAr === ""
                          ? "-"
                          : event.eventLocationAr
                        : event.eventLocationEn === ""
                        ? "-"
                        : event.eventLocationEn}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <button className="btn btn-bg w-100 d-flex justify-content-end align-items-center bg-body-tertiary mb-1">
              {`${t("more")}`}
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="eventModal"
        tabIndex="-1"
        aria-labelledby="eventModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between">
              <h5 className="modal-title" id="eventModalLabel">
                {selectedEvent &&
                  (language === "ar"
                    ? selectedEvent.titleAr
                    : selectedEvent.titleEn)}
              </h5>
              <button
                type="button"
                className="btn"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-body">
                {selectedEvent && (
                  <>
                    <table className="table table-responsive table-hover fs-12 ">
                      <tbody>
                        <tr>
                          <td>{t("overviewPage.events.market")} :</td>
                          <td className=" text-muted">
                            {language === "ar"
                              ? selectedEvent.marketNameAr
                              : selectedEvent.marketNameEn}
                          </td>
                        </tr>
                        <tr>
                          <td>{t("overviewPage.events.company")} :</td>
                          <td className="text-muted">
                            {language === "ar"
                              ? selectedEvent.companyNameAr
                              : selectedEvent.companyNameEn}
                          </td>
                        </tr>
                        <tr>
                          <td>{t("overviewPage.events.date")} :</td>
                          <td className=" text-muted">
                            {selectedEvent.occursOn}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {t("overviewPage.events.calenderEventType")} :
                          </td>
                          <td className=" text-muted">
                            {language === "ar"
                              ? selectedEvent.typeNameAr
                              : selectedEvent.typeNameEn}
                          </td>
                        </tr>
                        <tr>
                          <td>{t("overviewPage.events.venue")} :</td>
                          <td className=" text-muted">
                            {language === "ar"
                              ? selectedEvent.eventLocationAr === ""
                                ? "-"
                                : selectedEvent.eventLocationAr
                              : selectedEvent.eventLocationEn === ""
                              ? "-"
                              : selectedEvent.eventLocationEn}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="detail py-2">
                      {t("overviewPage.events.details")}
                    </p>

                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          language === "ar"
                            ? selectedEvent.descriptionAr
                            : selectedEvent.descriptionEn,
                      }}
                      className={language === "ar" ? "ar-text" : ""}
                    ></p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
