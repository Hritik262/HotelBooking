import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart = ({ seriesData }) => {
  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'top',
        },
      },
    },
    xaxis: {
      categories: seriesData.map((item) => item.country),
    },
    title: {
      text: 'Number of Visitors per Country',
    },
  };

  const series = [
    {
      name: 'Visitors',
      data: seriesData.map((item) => item.visitors),
    },
  ];

  return <ReactApexChart options={options} series={series} type="bar" height={350} />;
};

export default ColumnChart;
