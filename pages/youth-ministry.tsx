import { Meta } from "../components/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";

const YouthMinistry = () => {
  return (
    <>
      <Meta title="MFMO - Youth" />
      <div style={{ position: "relative" }} className={styles.bannerContainer}>
        <Image src="/bg30.png" layout="fill" />
      </div>
      <div className="container">
        <div className="row section">
          <div className="col-md-6">
            <h1 className="text-title-quote">
              Maturity does not come with age, but with the acceptance of
              responsibility.
            </h1>

            <span className="article-quote">
              We believe more than ever that today’s adolescents need a Biblical
              Framework to guide their lives into adulthood. Too many of our
              youth are tempted with whatever fad comes along, and they are
              compromising some of the best years of their lives. We’re here to
              help them conquer the distractions.
            </span>
          </div>
        </div>
        <div className="row section">
          <div className="col-md-6 align-center">
            <div
              style={{ backgroundImage: `url('/bg33.png')`, height: 250 }}
              className={`${aboutStyles["pst-profile-img"]}`}
            ></div>
          </div>
          <div className="col-md-6 align-center">
            <div
              style={{ backgroundImage: `url('/bg34.png')`, height: 250 }}
              className={`${aboutStyles["pst-profile-img"]}`}
            ></div>
          </div>
        </div>
        <div className="row section">
          <div className="col-md-6 align-center">
            <div
              style={{ backgroundImage: `url('/bg34.png')`, height: 250 }}
              className={`${aboutStyles["pst-profile-img"]}`}
            ></div>
          </div>
          <div className="col-md-6 align-center">
            <div
              style={{ backgroundImage: `url('/bg35.png')`, height: 250 }}
              className={`${aboutStyles["pst-profile-img"]}`}
            ></div>
          </div>
        </div>
        <div className="row section">
          <div className="col-md-6">
            <div
              style={{ backgroundImage: `url('/bg37.png')` }}
              className={aboutStyles["pst-profile-img2"]}
            ></div>
          </div>
          <div className="col-md-6">
            <p>
              <h1 className="text-title">
                Ebuka
                <span style={{ color: "#D24504" }}> / Youth President</span>
              </h1>
            </p>
            <p>
              <article className="article-quote">
                “I strive to make sure that the Youth ministry is a safe place
                where youth feel loved and understood. We have an open
                discussion format, one that engages and stimulates young people
                to share what’s on their minds. Our end goal is to show them
                that Jesus understands and loves them.”
              </article>
            </p>
            <p>
              <article className="article-quote">+234-813-456-7984</article>
            </p>

            <div className="h-line"></div>
            <div className="row section">
              <div className="col-md-12">
                <p>
                  <h1 style={{ fontSize: 18 }} className="article-quote">
                    Service Opportunities
                  </h1>
                </p>
                <p>
                  <article className="article-quote">
                    We are always looking for child-loving individuals to assist
                    in this exciting ministry. If you’d like to make a present
                    and future difference in the lives of the amazing children
                    at Mosaic, then please call Jessy or contact the church
                    office. Thank You!
                  </article>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouthMinistry;
