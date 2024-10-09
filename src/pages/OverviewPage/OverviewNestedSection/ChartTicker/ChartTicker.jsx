import React, { useEffect, useState } from "react";
import "./ChartTicker.css";
import { ferchChartData } from "../../../../services/apis";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../../../services/getToken";
import { useTranslation } from "react-i18next"; 
import {jwtDecode} from "jwt-decode";
const ChartTicker = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("1D");
  const timeOptions = [
    { display: t("overviewPage.chartTicker.day"), value: "1D" },
    { display: t("overviewPage.chartTicker.day5"), value: "5D" },
    { display: t("overviewPage.chartTicker.month3"), value: "3M" },
    { display: t("overviewPage.chartTicker.month6"), value: "6M" },
    { display: t("overviewPage.chartTicker.year"), value: "1Y" },
    { display: t("overviewPage.chartTicker.year2"), value: "2Y" },
    { display: t("overviewPage.chartTicker.year5"), value: "5Y" },
    { display: t("overviewPage.chartTicker.all"), value: "AY" },
  ];

  const isTokenExpired = (token) => {
    if (!token) return true; // No token, treat as expired
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decodedToken.exp < currentTime; // Check if token is expired
  };
  const handleTokenError = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token || isTokenExpired(token)) {
      await getToken();  // Re-authenticate if token is missing or expired
    }
    return true;  // Enable the query once token is valid
  };
  const { data, error } = useQuery({
    queryKey: ["chartTicker", activeTab],
    queryFn: () => ferchChartData(activeTab),
    enabled: !!handleTokenError(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  
  const handleTabChange = (time) => {
    setActiveTab(time);
  };

  const chartData = data?.data
    .map((item) => ({
      x: new Date(item.date).getTime(),
      y: parseFloat(item.close),
      open: parseFloat(item.open),
      high: parseFloat(item.high),
      low: parseFloat(item.low),
    }))
    .sort((a, b) => a.x - b.x);

  const yAxisMin = data?.configurations.min;
  const yAxisMax = data?.configurations.max;
  const lastDataPoint = chartData?.length ? chartData[chartData.length - 1] : null;
  const lastCloseValue = lastDataPoint ? lastDataPoint.y.toFixed(2) : 0;
  const lastDate = lastDataPoint
    ? new Date(lastDataPoint.x).toLocaleString(undefined, {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

    const chartOptions = {
      title: {
        text: "",
      },
      chart: {
        zoomType: "x", 
      },
      xAxis: {
        type: "datetime",
        title: {
          text: "",
        },
        crosshair: true, 
      },
      yAxis: {
        title: {
          text: ``,
        },
        min: yAxisMin,
        max: yAxisMax,
        labels: {
          formatter: function () {
            return this.value.toFixed(2);
          },
        },
        crosshair: true, 
        opposite: true,
      },
      tooltip: {
        shared: true,
        crosshairs: true, 
        pointFormat:
          `<b>Open:</b> {point.open}<br/>` +
          `<b>High:</b> {point.high}<br/>` +
          `<b>Low:</b> {point.low}<br/>` +
          `<b>Close:</b> {point.y}`,
      },
      series: [
        {
          type: "area",
          name: `Close: ${lastCloseValue} | Date: ${lastDate}`,
          data: chartData || [],
          color: "#6B8ABC",
        },
      ],
      accessibility: {
        enabled: false,
      },
      credits: {
        enabled: false,  
      },
    };
  return (
    <div className="card">
      <div className="card-header mb-1">
        {t("overviewPage.chartTicker.title")}
      </div>
      <div className="table table-responsive container-lg">
        <ul className="nav nav-tabs mb-3">
          {timeOptions.map((option, index) => (
            <li className="nav-item" key={`${option.value}-${index}`}>
              <button
                className={`nav-link ${
                  activeTab === option.value ? "active" : ""
                }`}
                onClick={() => handleTabChange(option.value)}
              >
                {option.display}
              </button>
            </li>
          ))}
        </ul>

        <div className="chart-container">
          {data && (
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          )}
        </div>
        <div>
          <button className="btn btn-bg w-100 d-flex justify-content-end align-items-center bg-body-tertiary">
            {`${t("more")}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartTicker;
