import Papa from 'papaparse';
import axios from 'axios';

export const fetchBookingData = async () => {
  const response = await axios.get('/hotel_bookings_1000.csv');
  return new Promise((resolve, reject) => {
    Papa.parse(response.data, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        resolve(result.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};
