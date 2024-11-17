import { useEffect, useState } from 'react';
import { getApartments, createApartment, updateApartment, deleteApartment } from '../api/apartmentApi';
import styles from './ApartmentsPage.module.css';

const ApartmentsPage = () => {
  const [apartments, setApartments] = useState([]);
  const [newApartment, setNewApartment] = useState({ rent: '', numberOfBedrooms: '', numberOfBathrooms: '', size: '' });

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    const { data } = await getApartments();
    setApartments(data);
  };

  const handleCreate = async () => {
    await createApartment(newApartment);
    fetchApartments();
    setNewApartment({ rent: '', numberOfBedrooms: '', numberOfBathrooms: '', size: '' });
  };

  const handleUpdate = async (id) => {
    const updatedSize = prompt("Enter new size in sq ft");
    await updateApartment(id, { size: updatedSize });
    fetchApartments();
  };

  const handleDelete = async (id) => {
    await deleteApartment(id);
    fetchApartments();
  };

  return (
    <div className={styles.apartmentsPage}>
      <h2>Apartment Listings</h2>
      <div className={styles.createApartment}>
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
        <button onClick={handleCreate}>Create Apartment</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Rent</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Size (sq ft)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {apartments.map((apartment) => (
            <tr key={apartment._id}>
              <td>${apartment.rent}</td>
              <td>{apartment.numberOfBedrooms}</td>
              <td>{apartment.numberOfBathrooms}</td>
              <td>{apartment.size || "N/A"}</td>
              <td>
                <button onClick={() => handleUpdate(apartment._id)}>Update</button>
                <button onClick={() => handleDelete(apartment._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApartmentsPage;