import { Meta } from "../components/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";
import Link from "next/link";

const Visit = () => {
  return (
    <>
      <Meta title="MFMO - Visit Us" />
      <div style={{ position: "relative" }} className={styles.bannerContainer}>
        <Image src="/bg45.png" layout="fill" />
      </div>
      <div className="container">
        <div className="row section">
          <div className="col-md-6">
            <h1 style={{ fontSize: "2rem" }} className="text-title-quote">
              Hi and welcome to <span className="text-green">Maranthan </span>
            </h1>
            <h1 style={{ fontSize: "2rem" }} className="text-title-quote">
              <span className="text-green">Family Mission Outreach.</span>
            </h1>
            <p>
              <article className="article-quote">
                We do agree there are a lot of churches to choose from in our
                fair city. We sure aren’t here to compete with all of them, it’s
                simply our goal to compliment what God is already doing around
                here (in a little different way).
              </article>
            </p>
            <p>
              <article className="article-quote">
                To get a glimpse of what Marathon Family Mission Outreach is
                really all about, we’d encourage you to check us out some Sunday
                morning.
              </article>
            </p>
          </div>
          <div className="col-md-6">
            <div style={{ marginBottom: "2.8rem" }}>
              <h1 className={styles.blackTitle}>Weekly Gatherings</h1>
              <p className="info">
                Sundays <span>indoors</span> &amp; <span>via Live stream</span>{" "}
                : <span style={{ color: "#000" }}>8PM</span>
              </p>
              <p className="info">
                Wednessdays <span>indoors</span> &amp;{" "}
                <span>via Live stream</span> :{" "}
                <span style={{ color: "#000" }}>6:30PM</span>
              </p>
            </div>
            <div>
              <h1 className={styles.blackTitle}>Location</h1>
              <p
                className="info"
                style={{ color: "#000", fontWeight: "bold", fontSize: 18 }}
              >
                Marathon Family Mission Outreach
              </p>
              <p className="info">2323 Lekki-Epe Expressway,</p>
              <p className="info">Ajah Lagos, Nigeria</p>
              <p>
                <Link href="#" as="church">
                  <a className="direction">Get Directions</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="row section">
          <div className="col-md-6 align-center">
            <div
              style={{ backgroundImage: `url('/bg31.png')`, height: 250 }}
              className={`${aboutStyles["pst-profile-img"]}`}
            ></div>
          </div>
          <div className="col-md-6 align-center">
            <div
              style={{ backgroundImage: `url('/bg32.png')`, height: 250 }}
              className={`${aboutStyles["pst-profile-img"]}`}
            ></div>
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
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3724669485346!2d3.600253314440463!3d6.474416995316317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf98ca4842e93%3A0x6ca2fe2de36ab0f4!2sLagos%20Business%20School!5e0!3m2!1sen!2sng!4v1635028807318!5m2!1sen!2sng"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-title-quote text-center">
              Detailed <span className="text-green">Direction</span>
            </h1>
            <p>
              <article className="article-quote">
                The Plaza has 3 levels and we are in the corner on the second
                level, next door to High Peak Sportswear.
              </article>
            </p>
            <p>
              <article className="article-quote">
                If you are coming down mainland, the Plaza has 3 levels and we
                are in the corner on the second level, next door to High Peak
                Sportswear.The Plaza has 3 levels and we are in the corner on
                the second level, next door to High Peak Sportswear.
              </article>
            </p>
            <p>
              <article className="article-quote">
                If you are coming from Lakowe, Epe, Ibeju-Lekki axis The Plaza
                has 3 levels and we are in the corner on the second level, next
                door to High Peak Sportswear.The Plaza has 3 levels and we are
                in the corner on the second level, next door to High Peak
                Sportswear.
              </article>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visit;
