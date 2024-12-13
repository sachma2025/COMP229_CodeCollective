import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createUser } from '../api/userApi';
import styles from './CreateUser.module.css'

function CreateUser() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [ formData, setFormaData ] = useState({
    fname: "",

    email: "",

    password: ""

  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormaData({
      ...formData,
      [name]: value
    })
  }

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const userPayload = {
      name: `${formData.fname}`,
      email: formData.email,

      password: formData.password,
    };
    try {
      const response = await createUser(userPayload);
      if (response.status === 200) {
        navigate('/login');
      } else {
        setError('Failed to create user. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again!');
      console.error(err);
    }
  };

  return (
    <section className={styles.createUserCtn}>
      <div className={styles.formWrapper}>
        <h2>Create User</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleCreateUser} className={styles.form}>
          <div>
            <div className={styles.formGroup}>
              <label>First Name</label>
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleInputChange}
                required
              />
            </div>

          </div>
          <div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

          </div>
          <div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

          </div>
          <div>
            <button type="submit" className={styles.loginButton}>Create user</button>
            <button type="reset" className={styles.loginButton}>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CreateUser 
