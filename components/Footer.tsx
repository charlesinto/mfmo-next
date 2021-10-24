import styles from "../styles/Footer.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles["footer-wrapper"]}>
      <section className={styles["foot-bgcontainer"]}></section>
      <section className={styles["foot-whitecontainer"]}>
        <div className="d-flex justify-content-center">
          <Image src="/logo2.png" width="82px" height="62px" />
        </div>
        <div>
          <h4
            className="d-flex justify-content-center pt-2"
            style={{ color: "#039832", fontSize: 15 }}
          >
            Contact Us: +234 815 4345 679 | info@marathonfamilyoutreach.com
          </h4>
        </div>
        <div>
          <h4
            className="d-flex justify-content-center pt-2"
            style={{ color: "#039832", fontSize: 16 }}
          >
            ©2020 Marathon Family Outreach. All rights reserved. Site by Company
            Name
          </h4>
        </div>
      </section>
    </footer>
  );
};
