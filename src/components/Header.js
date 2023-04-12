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
          <Link href="/autoListings" className={styles.link}>
            Auto Listings
          </Link>
          <a href="#how" className={styles.link}>
            About us
          </a>
          <a href="#reviews" className={styles.link}>
            Reviews
          </a>
          <Link href="/autoListings" className={styles.link}>
            Book your ride today
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
