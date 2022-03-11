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
            Contact Us:{" "}
            <a
              href="tel: +2349021415206"
              style={{ color: "#039832", padding: "0 4px", cursor: "pointer" }}
            >
              +2349021415206
            </a>{" "}
            | info@marathonfamilyoutreach.com
          </h4>
        </div>
        <div>
          <h4
            className="d-flex justify-content-center pt-2"
            style={{ color: "#039832", fontSize: 16 }}
          >
            ©2022 Maranatha Family Missions Outreach. All rights reserved.
          </h4>
        </div>
      </section>
    </footer>
  );
};
