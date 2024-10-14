import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TimeSeriesChart = ({ seriesData }) => {
  const options = {
    chart: {
      id: 'visitors-time-series',
      type: 'line',
    },
    xaxis: {
      type: 'datetime',
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Number of Visitors per Day',
    },
  };

  const series = [
    {
      name: 'Visitors',
      data: seriesData, // Format: [{x: "2021-07-01", y: 10}, ...]
    },
  ];

  return <ReactApexChart options={options} series={series} type="line" height={350} />;
};

export default TimeSeriesChart;
