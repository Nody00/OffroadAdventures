import Link from "next/link";
import styles from "./Header.module.css";
import MobileNav from "./MobileNav";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Suspense } from "react";
const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  function mobileNavHandler() {
    setMobileNav(true);
  }

  function hideMobileNavHandler() {
    setMobileNav(false);
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        RENT A <span>OFFROADER</span>
      </div>
      {!mobileNav && (
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/" className={styles.link}>
            Auto Listings
          </Link>
          <Link href="/" className={styles.link}>
            About us
          </Link>
          <Link href="/" className={styles.link}>
            Testimonials
          </Link>
          <Link href="/" className={styles.link}>
            News
          </Link>
          <Link href="/" className={styles.link}>
            Contact
          </Link>
        </nav>
      )}

      <MobileNav show={mobileNav} onHide={hideMobileNavHandler} />

      <div className={styles.mobileNavBtn} onClick={mobileNavHandler}>
        <Suspense>
          <IoMenu className={styles.icon} />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
