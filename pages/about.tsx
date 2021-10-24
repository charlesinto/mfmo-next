import { Meta } from "../components/Meta";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";

import Image from "next/image";

const About = () => {
  return (
    <>
      <Meta title="About Us" keywords="About Church" />
      <div style={{ position: "relative" }} className={styles.bannerContainer}>
        <Image src="/bg18.png" layout="fill" />
      </div>
      <div className="container">
        <div className="row section mb-3">
          <div className="col-md-6">
            <div className={aboutStyles["leadpastor-image"]}></div>
          </div>
          <div className="col-md-6">
            <h1 className="text-title">Pastor Godson Ajaero</h1>
            <h1 className="text-sub-title">Lead Pastor</h1>
            <p>
              <h2 className="article">
                David & his wife MLorem lipsum founding pastor of Marathon
                Family Mission Outreach Men ministry, alled Straight
                Street.Lorem lipsum founding pastor of Marathon Family Mission
                Outreach Men ministry alled Straight Street.Lorem lipsum
                founding pastor of Marathon Family Mission Outreach Men ministry
                alled Straight Street.
              </h2>
            </p>
            <p>
              <h2 className="article">
                David found Jesus, Lorem lipsum founding pastor of Marathon
                Family Mission Outreach Men ministry, alled Straight Street.
                "Where sin abounds, grace abounds much more.""Where sin abounds,
                grace abounds much more."
              </h2>
            </p>
          </div>
        </div>
        <div className="h-line mb-3"></div>
        <div className="row mb-3">
          <div className="col-md-12">
            <h1 className="text-title text-center">Elders</h1>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <div className={aboutStyles["pst-profile-img"]}></div>
            <h1 className="text-sub-title text-bold mt-2">Pastor Happy Tony</h1>
          </div>
          <div className="col-md-4">
            <div className={aboutStyles["pst-profile-img"]}></div>
            <h1 className="text-sub-title text-bold mt-2">Pastor Happy Tony</h1>
          </div>
          <div className="col-md-4">
            <div className={aboutStyles["pst-profile-img"]}></div>
            <h1 className="text-sub-title text-bold mt-2">Pastor Happy Tony</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
