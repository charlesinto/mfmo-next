import type { NextPage } from "next";
import { Meta } from "../components/Meta";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import $ from "jquery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const jqeury: any = $;

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <div
        style={{ position: "relative" }}
        className={`${styles.homePageBanner}`}
      >
        {/* <Image src="/bg6.png" layout="fill" /> */}

        <Carousel
          autoFocus={true}
          autoPlay={true}
          infiniteLoop={true}
          emulateTouch={true}
          dynamicHeight={true}
          interval={5000}
          showThumbs={false}
        >
          <div>
            <img src="/church21.webp" />
          </div>
          <div>
            <img src="/church31.webp" />
          </div>
          <div>
            <img src="/church41.webp" />
          </div>
          <div>
            <img src="/church6.webp" />
          </div>
        </Carousel>
      </div>
      <div className="container">
        <div className="row section">
          <div className="col-md-9 mb-5">
            <h1 className={styles.redTitle}>
              Welcome to Maranatha Family Missions Outreach
            </h1>
            <p className="article mb-5">
              The Lord had laid a burden in the heart of Pastor Godson Ajaero to
              begin a work to raise support for missionary work to an African
              country that has been closed to the gospel. On 19th August 2007
              the Lord gave him the following passages to encourage him for the
              work ahead. “And so I have made it my aim to preach the gospel,
              not where Christ was named, lest I should build on another man’s
              foundation.” Rom 15:20 (NKJV). “Also I heard the voice of the
              Lord, saying: Whom shall I send, And who will go for Us?
            </p>
            <Link href="/about">
              <a className="btn-contain mb-2">Learn More</a>
            </Link>
          </div>
          <div className="col-md-3">
            <div style={{ marginBottom: "2.8rem" }}>
              <h1 className={styles.blackTitle}>Weekly Gatherings</h1>
              <p className="info">
                Sundays <span>indoors</span> &amp; <span>via Live stream</span>{" "}
                : <span style={{ color: "#000" }}>8AM</span>
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
                Maranatha Family Mission Outreach
              </p>
              <p className="info mb-0">2 Amanze Osajie Street,</p>
              <p className="info">
                Golden Pearl Estate (opposite Happyland Estate) Olokonla, Ajah
                Lekki Lagos
              </p>
              <p>
                <Link href="#" as="church">
                  <a className="direction">Get Directions</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="row section">
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <h1 className={styles.blackTitle}>Our Partners</h1>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="section bannerContainer-responseive">
        <div className="scrolling-wrapper">
          <div className="card">
            <h2></h2>
          </div>
          <div className="card">
            <h2></h2>
          </div>
          <div className="card">
            <h2></h2>
          </div>
          <div className="card">
            <h2></h2>
          </div>
          <div className="card">
            <h2></h2>
          </div>
          <div className="card">
            <h2></h2>
          </div>
          <div className="card">
            <h2></h2>
          </div>
          <div className="card">
            <h2></h2>
          </div>
          <div className="card">
            <h2></h2>
          </div>
        </div>
      </div> */}
      {/* <div className={styles.firsTimeBanner}>
        <div className="container">
          <div className="row section">
            <div className="col-md-6">
              <h1 className={styles.whiteTitle}>Loving God and</h1>
              <h1 className={styles.whiteTitle}>Loving People</h1>
              <p>
                <article
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: 200,
                    letterSpacing: 0.4,
                    lineHeight: "1.8rem",
                  }}
                >
                  Marathon Family Mission Outreach we will welcome you with
                  loving arms. Our goal is to be an authentic community of
                  believers who are learning to love Jesus and love others more
                  and more each day.
                </article>
              </p>
            </div>
            <div className="col-md-6">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <h1 className={styles.whiteTitle}>First Time Here?</h1>
                <p>
                  <article
                    style={{
                      color: "#fff",
                      fontSize: "2em",
                      fontWeight: "bolder",
                      textShadow: "inherit",
                      letterSpacing: 0.6,
                      lineHeight: "1.8rem",
                    }}
                  >
                    We want to connect with you
                  </article>
                </p>
                <Link href="#!">
                  <a style={{ fontWeight: "bolder" }} className="btn-contain">
                    Connect with Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className="container">
        <div className="row pt-5">
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <h1 className={styles.blackTitle}>Join Us</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center pt-3">
              <img
                alt="banner"
                style={{
                  width: "40%",
                  maxWidth: 600,
                  marginRight: 20,
                  objectFit: "contain",
                  height: "auto",
                  cursor: "pointer",
                }}
                src="/banner1.webp"
              />
              <img
                alt="banner"
                style={{
                  width: "40%",
                  maxWidth: 600,
                  marginRight: 20,
                  objectFit: "contain",
                  height: "auto",
                  cursor: "pointer",
                }}
                src="/banner2.webp"
              />
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <h1 className={styles.blackTitle}>Upcoming Events</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <img
                style={{
                  width: "50%",
                  maxWidth: "400px",
                  height: "auto",
                  objectFit: "contain",
                }}
                src="/coming_soon.jpg"
              />
            </div>
          </div>
        </div>
        {/* <div className="row pt-3">
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div
              className={`${styles["ministriesCard"]} ${styles["events-card-1"]}`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  padding: 10,
                }}
              >
                <div
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 4,
                    background: "#518185",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h6
                    style={{
                      color: "#fff",
                      fontSize: 14,
                      marginBottom: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Feb
                  </h6>
                  <h6
                    style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}
                  >
                    21
                  </h6>
                </div>
              </div>
            </div>
            <h4 className={styles["event-card-h4"]}>Youth Arise</h4>
            <p>
              <article className={styles["event-card-article"]}>
                We show that the Christian life is fun, exciting, and vital to
                finding your way through the maze of life.
              </article>
            </p>
            <p>
              <aside className={styles["event-card-aside"]}>Feb 12, 2021</aside>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div
              className={`${styles["ministriesCard"]} ${styles["events-card-1"]}`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  padding: 10,
                }}
              >
                <div
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 4,
                    background: "#518185",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h6
                    style={{
                      color: "#fff",
                      fontSize: 14,
                      marginBottom: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Feb
                  </h6>
                  <h6
                    style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}
                  >
                    21
                  </h6>
                </div>
              </div>
            </div>

            <h4 className={styles["event-card-h4"]}>Youth Arise</h4>
            <p>
              <article className={styles["event-card-article"]}>
                We show that the Christian life is fun, exciting, and vital to
                finding your way through the maze of life.
              </article>
            </p>
            <p>
              <aside className={styles["event-card-aside"]}>Feb 12, 2021</aside>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div
              className={`${styles["ministriesCard"]} ${styles["events-card-1"]}`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  padding: 10,
                }}
              >
                <div
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 4,
                    background: "#518185",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h6
                    style={{
                      color: "#fff",
                      fontSize: 14,
                      marginBottom: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Feb
                  </h6>
                  <h6
                    style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}
                  >
                    21
                  </h6>
                </div>
              </div>
            </div>
            <h4 className={styles["event-card-h4"]}>Youth Arise</h4>
            <p>
              <article className={styles["event-card-article"]}>
                We show that the Christian life is fun, exciting, and vital to
                finding your way through the maze of life.
              </article>
            </p>
            <p>
              <aside className={styles["event-card-aside"]}>Feb 12, 2021</aside>
            </p>
          </div>
        </div> */}
      </section>
      <div className="">
        <div className="container">
          <div className="row section">
            <div className="col-md-12">
              <div className="d-flex justify-content-center">
                <h1 className={styles.blackTitle}>Our Ministries</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-12 col-lg-4">
              <div
                className={`${styles["ministriesCard"]} ${styles["ministriesCard-1"]}`}
              >
                <Link href="#">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <h1 className={styles.whiteTitle}>Teens</h1>
                    <p>
                      <article
                        style={{
                          color: "#fff",
                          textShadow: "1px 1px 1px rgb(173 161 161)",
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Children Ministry
                      </article>
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 col-lg-4">
              <Link href="#">
                <div
                  className={`${styles["ministriesCard"]} ${styles["ministriesCard-2"]}`}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <h1 className={styles.whiteTitle}>Youth</h1>
                    <p>
                      <article
                        style={{
                          color: "#fff",
                          textShadow: "inherit",
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Youth Ministry
                      </article>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4">
              <Link href="#">
                <div
                  className={`${styles["ministriesCard"]} ${styles["ministriesCard-3"]}`}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <h1 className={styles.whiteTitle}>Leadership</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row pt-4 justify-content-center">
            <div className="col-md-3 col-sm-12 col-lg-3">
              <Link href="#">
                <div
                  className={`${styles["ministriesCard"]} ${styles["ministriesCard-4"]}`}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <h1 className={styles.whiteTitle}>Men</h1>
                    <p>
                      <article
                        style={{
                          color: "#fff",
                          textShadow: "1px 1px 1px rgb(173 161 161)",
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Men Ministry
                      </article>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3">
              <Link href="#">
                <div
                  className={`${styles["ministriesCard"]} ${styles["ministriesCard-5"]}`}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <h1 className={styles.whiteTitle}>The Gathering</h1>
                    <p>
                      <article
                        style={{
                          color: "#fff",
                          textShadow: "inherit",
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Women Ministry
                      </article>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3">
              <Link href="#">
                <div
                  className={`${styles["ministriesCard"]} ${styles["ministriesCard-6"]}`}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <h1 className={styles.whiteTitle}>Service</h1>
                    <p>
                      <article
                        style={{
                          color: "#fff",
                          textShadow: "inherit",
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Doing Life Together
                      </article>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3">
              <Link href="#">
                <div
                  className={`${styles["ministriesCard"]} ${styles["ministriesCard-7"]}`}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <h1 className={styles.whiteTitle}>Missions</h1>
                    <p>
                      <article
                        style={{
                          color: "#fff",
                          textShadow: "inherit",
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Community Ministry
                      </article>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-12">
              <h1
                style={{ fontSize: 18, lineHeight: 2 }}
                className={styles.blackTitle}
              >
                CURRENT SERIES
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-center">
                <img
                  style={{
                    width: "50%",
                    maxWidth: "400px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  src="/coming_soon.jpg"
                />
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className={styles.seriesContainer}>
              <div className="row">
                <div className="col-md-6">
                  <h1 className={styles.whiteTitle}>Discipleship</h1>
                  <p>
                    <article className={styles.article}>
                      God has given you an awesome vision for your life, but you
                      can live your entire life and not know it. In this series,
                      you will know how to recognize God’s vision and chase
                      after it.
                    </article>
                  </p>
                  <div style={{ marginTop: "30px" }}>
                    <Link href="#!">
                      <a className="btn-contain">View Series</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <style global jsx>{`
        .bannerContainer-responseive {
          background: rgba(3, 152, 50, 0.2);
          opacity: 0.2;
        }
        .scrolling-wrapper {
          overflow-x: scroll;
          overflow-y: hidden;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
          padding: 20px 16px;
        }

        .scrolling-wrapper::-webkit-scrollbar {
          display: none;
        }

        .scrolling-wrapper .card {
          display: inline-block;
          background-color: #c4c4c4;
          width: 50%;
          max-width: 200px;
          height: 120px;
          margin-right: 10px;
        }

        .direction {
          color: #518185;
          text-decoration: underline;
        }
        .info {
          color: #1d1d1d;
          font-size: 16px;
        }

        .info span {
          color: #518185;
          font-weight: bold;
        }
        .section {
          padding: 2.32rem 10px;
        }
        .article {
          color: #1d1d1d;
          line-height: 29px;
          letter-spacing: 0.2px;
          font-size: 16px;
          text-align: left;
        }
        .btn-contain {
          font-size: 14px;
          font-weight: normal;
          padding: 0.9rem 0.75rem;
        }
        .black-title {
          color: #2a3737;
        }
      `}</style>
    </>
  );
};

export default Home;
