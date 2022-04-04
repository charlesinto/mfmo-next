import { Meta } from "../components/Meta";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Meta title="About Us" keywords="About Church" />
      <div
        style={{ position: "relative", height: 350 }}
        className={styles.bannerContainer}
      >
        <img
          src="/church31.webp"
          style={{
            objectFit: "cover",
            objectPosition: "top center",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="container">
        <div className="py-4"></div>
        <div className="row section mb-3">
          <div className="col-md-3  ">
            <div className={aboutStyles["leadpastor-image"]}></div>
          </div>
          <div className=" col-md-9 ">
            <h1 className="text-title">Pastor Godson Ajaero</h1>
            <h1 className="text-sub-title">Senior Pastor</h1>
            <p>
              <h2 className="article">
                Pastor Godson, who gave his life to Christ in 1982 as a
                teenager, has been involved in church leadership since 1985. He
                has served in various leadership capacities in Nigeria
                Fellowship of Evangelical Students (NIFES), Evangelical
                Fellowship in Anglican Communion (EFAC) and the Redeemed
                Christian Church of God (RCCG). He is currently the Senior
                Pastor of Maranatha Family Missions Outreach (MFMO). He is a
                partner of Calvary Ministries (CAPRO) and through MFMO provides
                support for missionaries in various fields.
              </h2>
            </p>
            <p>
              <h2 className="article">
                He is married to Pastor Tina and they are blessed with three
                children.Pastor Godson, who is an engineer by training, is a
                certified Project Management Professional.
              </h2>
            </p>
          </div>
        </div>
        {/* <div className="h-line mb-3"></div>
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
        </div> */}
      </div>
    </>
  );
};

export default About;
