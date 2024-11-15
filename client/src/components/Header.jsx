import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>The Listing Company</div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/users" className={styles.navLink}>Users</Link>
        <Link to="/apartments" className={styles.navLink}>Apartments</Link>
        <Link to="/login" className={styles.navLink}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;
