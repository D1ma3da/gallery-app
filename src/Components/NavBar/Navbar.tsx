import React from 'react';
import styles from './Navbar.module.scss';
import logo_light from '../../assets/logo_dark.svg';
import logo_dark from '../../assets/logo.svg';
import toggle_light from '../../assets/toggle_dark.svg';
import toggle_dark from '../../assets/toggle_light.svg';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <div className={`${styles.navbar} ${theme === 'light' ? styles.light : styles.dark}`}>
      <img
        src={theme === 'light' ? logo_light : logo_dark}
        alt="Logo"
        className={styles.logo}
      />
      <img
        onClick={toggleTheme}
        src={theme === 'light' ? toggle_light : toggle_dark}
        alt="Toggle Icon"
        className={styles.toggle_icon}
      />
    </div>
  );
};

export default Navbar;