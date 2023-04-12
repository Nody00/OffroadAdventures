import styles from "./Footer.module.css";
import { FaTruckMonster } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer2}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.logoSection}>
              <div className={styles.logoContainer}>
                <FaTruckMonster className={styles.icon} />
                <p>Offroading Adventures</p>
              </div>
              <p className={styles.copyright}>
                Made by Dino K. as a portfolio project &#128513;
              </p>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.title}>USEFUL LINK</p>
              <div className={styles.linkContainer}>
                <p className={styles.footerLink}>About us</p>
                <p className={styles.footerLink}>Services</p>
                <p className={styles.footerLink}>Information</p>
                <p className={styles.footerLink}>Policy</p>
              </div>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.title}>OUR TERMS</p>
              <div className={styles.linkContainer}>
                <p className={styles.footerLink}>Support</p>
                <p className={styles.footerLink}>Contacts</p>
                <p className={styles.footerLink}>Typography</p>
                <p className={styles.footerLink}>FAQ</p>
              </div>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.title}>SHOWROOM</p>
              <div className={styles.linkContainer}>
                <p className={styles.footerLink}>MNE, Auto, Queen St. 6512</p>
                <p className={styles.footerLink}>Phone.: +7 234 949-58-83</p>
                <p className={styles.footerLink}>E-mail.: info@example.com</p>
                <p className={styles.footerLink}>&copy; 2023 Dino K.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
