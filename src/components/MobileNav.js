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
