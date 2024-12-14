
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

  // Example data override (if you want to use the fetched data, 
  // map them into the structure below or simply use the images provided)
  const propertyData = [
    {
      id: 1,
      image: "https://tse4.mm.bing.net/th?id=OIP.FWZQu-c6w6ovGRUNW6E7BAHaKv&pid=Api&P=0&h=220",
      price: "$2000",
      title: "Summerhill Estate",
      description: "Massive opportunity to build your dream home at the base of Mummy Mountain"
    },
    {
      id: 2,
      image: "https://tse4.mm.bing.net/th?id=OIP.lX8-6LurGO8UD1KnO150WAHaEK&pid=Api&P=0&h=220",
      price: "$3800",
      title: "Autumn Mist Villa",
      description: "A beautiful retreat with ample amenities and scenic views"
    },
    {
      id: 3,
      image: "https://tse3.mm.bing.net/th?id=OIP.HX_xMpot_IFpkkm-2fgw4wHaE8&pid=Api&P=0&h=220",
      price: "$8000",
      title: "Coastal Breeze",
      description: "Modern villa by the shoreline with a refreshing ambiance"
    },
    {
      id: 4,
      image: "https://tse3.mm.bing.net/th?id=OIP.A7nzFja2CTNTg2oSZmONFgHaE6&pid=Api&P=0&h=220",
      price: "$2000",
      title: "Rolling Hills Manor",
      description: "Spacious property surrounded by lush greenery and hills"
    },
    {
      id: 5,
      image: "https://tse1.mm.bing.net/th?id=OIP.WaXJnwHDuE7_rHoKjQpO8QHaE8&pid=Api&P=0&h=220",
      price: "$4000",
      title: "Golden Fields Cottage",
      description: "Cozy cottage with plenty of natural light and warm interiors"
    },
    {
      id: 6,
      image: "https://tse4.mm.bing.net/th?id=OIP.k7NoQPcEOgOExhhgWBMagAHaFj&pid=Api&P=0&h=220",
      price: "$7050",
      title: "Rustic Pine Estate",
      description: "Countryside property offering tranquility and open spaces"
    }
  ];

  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Discover Most Suitable Property</h1>
          <p>Find a variety of properties that suit you very easily<br/>
          Forget all difficulties in finding a residence for you</p>
        </div>
      </div>

      <div className={styles.propertiesSection}>
        <h2>Featured Listings</h2>
        <div className={styles.cardGrid}>
          {propertyData.map((prop) => (
            <div className={styles.card} key={prop.id}>
              <div className={styles.imageWrapper}>
                <img src={prop.image} alt={prop.title} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.price}>{prop.price}</span>
                <h3>{prop.title.length > 15 ? prop.title.slice(0,15) + '...' : prop.title}</h3>
                <p>{prop.description.length > 60 ? prop.description.slice(0,60) + '...' : prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
