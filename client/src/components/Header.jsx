/*import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const navigate = useNavigate();

  const handleAuthentication = () => {
    setIsAuthenticated((prev) => !prev);
    navigate("/");
  }

  return (
    <header className={styles.header}>
      <div> <img src='/images/logo/CodeCollective-logo.jpg' alt='code collective logo' /></div>
      <div className={styles.logo}><p>The Listing Company</p></div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        {isAuthenticated ?
          <>
            <Link to="/users" className={styles.navLink}>Users</Link>
            <Link to="/apartments" className={styles.navLink}>Apartments</Link>
            <button onClick={handleAuthentication} className={styles.navBtn}>Sign Out </button>
          </>
        :
          <>
            <Link onClick={handleAuthentication} to="/login" className={styles.navLink}>Login</Link>
            <Link to="/create-user" className={styles.navLink}>Create User </Link>
          </>
        }
      </nav>
    </header>
  );
};

export default Header;*/
import { Link, useNavigate } from 'react-router-dom'; 
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const navigate = useNavigate();

  const handleAuthentication = () => {
    setIsAuthenticated((prev) => !prev);
    navigate("/");
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src='/images/logo/CodeCollective-logo.jpg' alt='code collective logo' />
        <div className={styles.logo}><p>The Listing Company</p></div>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/users" className={styles.navLink}>Users</Link>
            <Link to="/apartments" className={styles.navLink}>Apartments</Link>
            <button onClick={handleAuthentication} className={`${styles.navBtn} ${styles.ctaBtn}`}>Sign Out</button>
          </>
        ) : (
          <>
            <Link onClick={handleAuthentication} to="/login" className={styles.navLink}>Login</Link>
            <Link to="/create-user" className={`${styles.navLink} ${styles.ctaLink}`}>Create User</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
