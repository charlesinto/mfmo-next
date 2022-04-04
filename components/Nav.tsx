import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="container">
        <nav className={styles.navContainer}>
          <div className={styles["lg-logo"]}>
            <Link href="/" as="/">
              <a className="home-link">
                {" "}
                <Image
                  className={styles.logo}
                  src="/logo2.png"
                  // width={200}
                  // height={70}
                  width={70}
                  height={40}
                />
                <span>Home</span>
              </a>
            </Link>
          </div>
          <div className={styles["sm-logo"]}>
            <Link href="/" as="/">
              <a className="home-link">
                {" "}
                <Image
                  className={styles.logo}
                  src="/logo2.png"
                  width={70}
                  height={40}
                />
                <span>Home</span>
              </a>
            </Link>
          </div>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="/about">
                <a>Leadership</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/visit">
                <a>Visit Us</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a>Events</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/watch-offline">Watch/Live Now</Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.btnOutline}>Get Message</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.btnContain}>Give</a>
              </Link>
            </li>
          </ul>
          <div className={styles["mobile-menu"]}>
            <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i
                className={`${
                  isMenuOpen ? "ion ion-md-close" : "ion ion-md-menu"
                }`}
              ></i>
            </span>
          </div>
          <style global jsx>
            {`
              .btn-contain {
                color: #fff;
                border: 1px solid #039832;
                background-color: #039832;
                padding: 0.3rem 1.2rem;
                border-radius: 3px;
              }
              .btn-contain:hover {
                color: #fff;
              }
            `}
          </style>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="pt-4">
          <ul className={styles.mobileMenu}>
            <li className={styles.li}>
              <Link href="/about">
                <a>Leadership</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/visit">
                <a>Visit Us</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a>Events</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/watch-offline">Watch/Live Now</Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.btnOutline}>Get Message</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.btnContain}>Give</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
