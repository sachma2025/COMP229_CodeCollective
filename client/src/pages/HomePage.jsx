import { useEffect, useState } from 'react';
import { getApartments } from '../api/apartmentApi';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const { data } = await getApartments();
        setApartments(data);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };
    fetchApartments();
  }, []);

  return (
    <div className={styles.homePage}>
      <h1>Apartment Listings</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Rent</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Size (sq ft)</th>
            <th>Available</th>
            <th>Date Available</th>
          </tr>
        </thead>
        <tbody>
          {apartments.map((apartment) => (
            <tr key={apartment._id}>
              <td>${apartment.rent}</td>
              <td>{apartment.numberOfBedrooms}</td>
              <td>{apartment.numberOfBathrooms}</td>
              <td>{apartment.size || "N/A"}</td>
              <td>{apartment.availability ? "Yes" : "No"}</td>
              <td>{new Date(apartment.dateAvailable).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;