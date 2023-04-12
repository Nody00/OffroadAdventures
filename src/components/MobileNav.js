import styles from "./MobileNav.module.css";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { Suspense } from "react";
import { CSSTransition } from "react-transition-group";
const MobileNav = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: styles.enterActive,
        exit: "",
        exitActive: styles.exitActive,
      }}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link} onClick={props.onHide}>
            Home
          </Link>
          <Link
            href="/autoListings"
            className={styles.link}
            onClick={props.onHide}
          >
            Auto Listings
          </Link>
          <a href="#how" className={styles.link} onClick={props.onHide}>
            About us
          </a>
          <a href="#reviews" className={styles.link} onClick={props.onHide}>
            Reviews
          </a>
          <Link
            href="/autoListings"
            className={styles.link}
            onClick={props.onHide}
          >
            Book your ride today
          </Link>
          <div className={styles.mobileNavBtn} onClick={props.onHide}>
            <Suspense>
              <IoClose className={styles.icon} />
            </Suspense>
          </div>
        </nav>
      </div>
    </CSSTransition>
  );
};

export default MobileNav;
