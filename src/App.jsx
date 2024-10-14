import React, { useState, useEffect } from 'react';
import DateFilter from './components/DataFilter';
import TimeSeriesChart from './components/TimeSeriesChart';
import ColumnChart from './components/ColumnChart';
import SparklineChart from './components/SparklineChart';
import { fetchBookingData } from './services/api';
import './App.css';


const App = () => {
  const [bookingData, setBookingData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBookingData();
      setBookingData(data);
    };
    fetchData();
  }, []);

  const handleDateChange = (startDate, endDate) => {
    const filtered = bookingData.filter((booking) => {
      const date = new Date(
        `${booking.arrival_date_year}-${booking.arrival_date_month}-${booking.arrival_date_day_of_month}`
      );
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
    setFilteredData(filtered);
  };

  // Prepare data for charts
  const timeSeriesData = filteredData.map((item) => ({
    x: `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`,
    y: item.adults + item.children + item.babies,
  }));

  const countryData = filteredData.reduce((acc, item) => {
    if (!acc[item.country]) acc[item.country] = 0;
    acc[item.country] += item.adults + item.children + item.babies;
    return acc;
  }, {});

  const sparklineAdults = filteredData.map((item) => item.adults);
  const sparklineChildren = filteredData.map((item) => item.children);

  return (
    <div>
      <h1>Hotel Booking Dashboard</h1>
      <DateFilter onDateChange={handleDateChange} />
      <TimeSeriesChart seriesData={timeSeriesData} />
      <ColumnChart seriesData={Object.keys(countryData).map((country) => ({
        country,
        visitors: countryData[country],
      }))} />
      <SparklineChart title="Adult Visitors" seriesData={sparklineAdults} />
      <SparklineChart title="Children Visitors" seriesData={sparklineChildren} />
    </div>
  );
};

export default App;
