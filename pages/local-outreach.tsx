import { Meta } from "../components/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";
import Link from "next/link";

const LocalOutreach = () => {
  return (
    <>
      <Meta title="MFMO - Local Outreach" />
      <div style={{ position: "relative" }} className={styles.bannerContainer}>
        <Image src="/bg46.png" layout="fill" />
      </div>
      <div className="container">
        <div className="row section">
          <div className="col-md-12">
            <div style={{ width: "60%", margin: "0px auto" }}>
              <h1 className="text-title text-center">
                As important as it is to support Global Missions, we also don’t
                want to forget the needs of people in our own community.
              </h1>
            </div>
          </div>
        </div>
        <div className="row section">
          <div className="col-md-4">
            <div
              style={{ backgroundImage: `url('/bg47.png')`, height: 300 }}
              className={`${aboutStyles["pst-profile-img"]}`}
            ></div>
          </div>
          <div className="col-md-8">
            <h1 className="text-title">Feed the widow</h1>
            <p>
              <article className="article-quote">
                This powerful ministry helps families & individuals who are
                transiting out of homelessness, emergency & domestic violence
                shelters, and veterans moving into permanent housing. We
                purchase the basket and you and/or your family and friends fill
                it with the necessary items it takes to move into a new place
                (suggested list provided).
              </article>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalOutreach;
