import { Meta } from "../components/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";

const ChildrenMinistry = () => {
  return (
    <>
      <Meta title="MFMO - CHILDREN" />
      <div style={{ position: "relative" }} className={styles.bannerContainer}>
        <Image src="/bg29.png" layout="fill" />
      </div>
      <div className="container">
        <div className="row section">
          <div className="col-md-6">
            <h1 className="text-title-quote">
              At Marathon Family Mission Outreach we want to partner with
              parents to guide their children toward a heart for God.
            </h1>

            <span className="article-quote">
              We deeply desire to reveal the love of Jesus to children by
              building relationships, engaging in meaningful play, and learning
              God’s Word - and to have lots of FUN while doing it!
            </span>
          </div>
        </div>

        <div className="row section">
          <div className="col-md-4">
            <div
              style={{ backgroundImage: `url('/bg40.png')`, height: 250 }}
              className={`${aboutStyles["pst-profile-img"]}`}
            ></div>
            <h1 className="text-sub-title text-center text-bold mt-2">
              Nursery
            </h1>
            <p>
              <article className="article-quote text-center">
                6 months -3 years old. Your young ones will enjoy our play room
                in a safe environment. A private room is available for nursing
                mothers.
              </article>
            </p>
          </div>
          <div className="col-md-4">
            <div
              style={{ backgroundImage: `url('/bg41.png')`, height: 250 }}
              className={`${aboutStyles["pst-profile-img"]}`}
            ></div>
            <h1 className="text-sub-title text-center text-bold mt-2">
              Primary
            </h1>
            <p>
              <article className="article-quote text-center">
                PreK-1st grade. Your children will have a time of worship and a
                Bible lesson together, as well as playtime with their peers and
                adults.
              </article>
            </p>
          </div>
          <div className="col-md-4">
            <div
              style={{ backgroundImage: `url('/bg42.png')`, height: 250 }}
              className={`${aboutStyles["pst-profile-img"]}`}
            ></div>
            <h1 className="text-sub-title text-center text-bold mt-2">
              Elementary
            </h1>
            <p>
              <article className="article-quote text-center">
                2nd-6th grade. Your children will experience a time of worship
                and a Bible lesson together, as well as a time to apply the
                lesson with additional activities.
              </article>
            </p>
          </div>
        </div>
        <div className="row section">
          <div className="col-md-12">
            <div
              style={{ position: "relative" }}
              className={styles.bannerContainer}
            >
              <Image src="/bg27.png" layout="fill" />
            </div>
          </div>
        </div>
        <div className="row section">
          <div className="col-md-12">
            <div
              style={{ position: "relative" }}
              className={styles.bannerContainer}
            >
              <Image src="/bg28.png" layout="fill" />
            </div>
          </div>
        </div>
        <div className="h-line"></div>
        <div className="row section">
          <div className="col-md-6">
            <div
              style={{ backgroundImage: `url('/bg39.png')` }}
              className={aboutStyles["pst-profile-img2"]}
            ></div>
          </div>
          <div className="col-md-6">
            <p>
              <h1 className="text-title">
                Tina
                <span style={{ color: "#D24504" }}> / Children's Director</span>
              </h1>
            </p>
            <p>
              <article className="article-quote">
                Christiana and her husband Dave were married in 2010. Christiana
                has been volunteering and teaching in Children’s Ministry since
                2006. She graduated from Covenant University in 2010 with a
                Bachelor of Science in Psychology: Child and Adolescent
                Development.
              </article>
            </p>
            <p>
              <article className="article-quote">
                Christiana's favorite part about Children’s Ministry is getting
                to have conversations and fun with the children as they learn
                about the Bible.
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

export default ChildrenMinistry;
