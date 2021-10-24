import { Meta } from "../components/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";

const Men = () => {
  return (
    <>
      <Meta title="MFMO - MEN" />
      <div style={{ position: "relative" }} className={styles.bannerContainer}>
        <Image src="/bg25.png" layout="fill" />
      </div>
      <div className="container">
        <div className="row section">
          <div className="col-md-6">
            <h1 className="text-title-quote">
              “Most men lead lives of quiet desperation and die with their song
              still inside them.”
            </h1>
            <p>
              <span className="article-quote">~Charle Spurgeon</span>
            </p>
            <span className="article-quote">
              Marathon Family Mission Outreach men meet regularly to discuss
              various issues relevant to being a strong man of God. We want
              today’s man to be all God called him to be, and know he’s not
              alone in leading himself or his family.
            </span>
          </div>
          <div className="col-md-6">
            <div style={{ marginBottom: "2.8rem" }}>
              <h1 className={styles.blackTitle}>Monthly Large Group Event</h1>
              <p className="info">
                <article className="article-quote">
                  1st Thursday of the Month @ 6pm at Marathon Family Mission
                  Outreach
                </article>
                <article className="article-quote">
                  We share a meal together and then hear an inspiring message to
                  help us in our everyday lives.
                </article>
              </p>
            </div>
            <div style={{ marginBottom: "2.8rem" }}>
              <h1 className={styles.blackTitle}>Monthly Large Group Event</h1>
              <p className="info">
                <article className="article-quote">
                  We also have smaller groups of men that meet once or twice
                  during the month in homes, at the ballpark, or for special
                  events or service projects.
                </article>
              </p>
            </div>
          </div>
        </div>
        <div className="h-line"></div>
        <div className="row section">
          <div className="col-md-6">
            <div className={aboutStyles["pst-profile-img2"]}></div>
          </div>
          <div className="col-md-6">
            <p>
              <h1 className="text-title">
                Godson Ajero
                <span style={{ color: "#D24504" }}> / Lead Pastor</span>
              </h1>
            </p>
            <p>
              <article className="article-quote">
                For questions about Marathon Family Mission Outreach Men
                ministry, contact David.
              </article>
            </p>
            <p>
              <article className="article-quote">
                +234-814-000-0000 | david@marathonfamilymissionoutreach.com
              </article>
            </p>
            <p>
              <article className="article-quote">
                christianadaves@gmail.com
              </article>
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

export default Men;
