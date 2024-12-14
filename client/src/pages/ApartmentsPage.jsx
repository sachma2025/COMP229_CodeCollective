
import { useEffect, useState } from 'react'; 
import { getApartments, createApartment, updateApartment, deleteApartment } from '../api/apartmentApi';
import styles from './ApartmentsPage.module.css';

const ApartmentsPage = () => {
  const [apartments, setApartments] = useState([]);
  const [newApartment, setNewApartment] = useState({ rent: '', numberOfBedrooms: '', numberOfBathrooms: '', size: '' });

  // Image pool for assigning to newly created apartments
  const imagePool = [
    "https://tse2.mm.bing.net/th?id=OIP.a8-hV3e5m6L64CZ-w3nErQHaEO&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.zsA2aQL2Z5kUnPj1yghPfQHaFj&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.WaXJnwHDuE7_rHoKjQpO8QHaE8&pid=Api&P=0&h=220",
    "https://tse2.mm.bing.net/th?id=OIP.vO0YdyYadeimNeFVkKugqwHaE8&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.UEgoq4Ng4XGfLcN4QHwbWgHaEo&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.1gXZ5fOMPMpc_q8jV1ta6wHaFg&pid=Api&P=0&h=220",
    "https://tse2.mm.bing.net/th?id=OIP.0AM19tlajzW0moncadcYYwHaE5&pid=Api&P=0&h=220",
    "https://tse2.mm.bing.net/th?id=OIP.HuIbYevTwF3JY2eiMTetggHaE8&pid=Api&P=0&h=220"
  ];

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    const { data } = await getApartments();
    setApartments(data);
  };

  const handleCreate = async () => {
    // Assign a random image from the pool
    const randomImage = imagePool[Math.floor(Math.random() * imagePool.length)];
    const apartmentToCreate = { ...newApartment, image: randomImage };
    await createApartment(apartmentToCreate);
    fetchApartments();
    setNewApartment({ rent: '', numberOfBedrooms: '', numberOfBathrooms: '', size: '' });
  };

  const handleUpdate = async (id) => {
    const updatedSize = prompt("Enter new size in sq ft");
    if (updatedSize) {
      await updateApartment(id, { size: updatedSize });
      fetchApartments();
    }
  };

  const handleDelete = async (id) => {
    await deleteApartment(id);
    fetchApartments();
  };

  return (
    <div className={styles.apartmentsPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>WELCOME TO A NEW EXPERIENCE </h1>
          <p>Create the  perfect place to call home for others .</p>
        </div>
      </div>

      <div className={styles.createApartmentSection}>
        <h2>Create a New Apartment</h2>
        <div className={styles.createApartmentForm}>
          <input
            type="number"
            placeholder="Rent"
            value={newApartment.rent}
            onChange={(e) => setNewApartment({ ...newApartment, rent: e.target.value })}
          />
          <input
            type="number"
            placeholder="Bedrooms"
            value={newApartment.numberOfBedrooms}
            onChange={(e) => setNewApartment({ ...newApartment, numberOfBedrooms: e.target.value })}
          />
          <input
            type="number"
            placeholder="Bathrooms"
            value={newApartment.numberOfBathrooms}
            onChange={(e) => setNewApartment({ ...newApartment, numberOfBathrooms: e.target.value })}
          />
          <input
            type="number"
            placeholder="Size (sq ft)"
            value={newApartment.size}
            onChange={(e) => setNewApartment({ ...newApartment, size: e.target.value })}
          />
          <button onClick={handleCreate}>Add Apartment</button>
        </div>
      </div>

      <div className={styles.cardGrid}>
        {apartments.map((apartment) => (
          <div className={styles.card} key={apartment._id}>
            <div className={styles.imageWrapper}>
              <img src={apartment.image || imagePool[0]} alt="Apartment" />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.infoRow}>
                <span className={styles.price}>${apartment.rent}</span>
                <span className={styles.details}>{apartment.numberOfBedrooms} Bed, {apartment.numberOfBathrooms} Bath</span>
              </div>
              <div className={styles.sizeInfo}>
                <span>Size: {apartment.size || "N/A"} sq ft</span>
              </div>
            </div>
            <div className={styles.cardActions}>
              <button onClick={() => handleUpdate(apartment._id)} className={styles.updateBtn}>Update</button>
              <button onClick={() => handleDelete(apartment._id)} className={styles.deleteBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApartmentsPage;
