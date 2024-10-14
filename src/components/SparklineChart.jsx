import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SparklineChart = ({ title, seriesData }) => {
  const options = {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: title,
      align: 'center',
      style: {
        fontSize: '14px',
      },
    },
  };

  const series = [
    {
      name: 'Visitors',
      data: seriesData,
    },
  ];

  return <ReactApexChart options={options} series={series} type="line" height={100} />;
};

export default SparklineChart;
