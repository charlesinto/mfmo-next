import { Meta } from "../components/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";
import Link from "next/link";
import Button from "../components/Button";

const Give = () => {
  return (
    <>
      <Meta title="MFMO - Give" />
      <div style={{ position: "relative" }} className={styles.bannerContainer}>
        <Image src="/bg45.png" layout="fill" />
      </div>
      <div className="container">
        <div className="row section">
          <div className="col-md-12">
            <h1 className="text-title text-center">
              Your generous gift helps Maranthan Family Mission Outreach
            </h1>
          </div>
        </div>
        <div className="row section">
          <div className="col-md-3">
            <div className="d-flex justify-content-center">
              <Image src="/bg51.png" width="120px" height="60px" />
            </div>
            <p>
              <article className="text-title">
                Assist financially with professional counseling
              </article>
            </p>
            <p>
              <article className="article-quote">
                “You cannot be spiritually mature while remaining emotionally
                immature.”
              </article>
            </p>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center">
              <Image src="/bg49.png" width="120px" height="60px" />
            </div>
            <p>
              <article className="text-title">
                Support missionaries around the world
              </article>
            </p>
            <p>
              <article className="article-quote">
                You can learn more about the people we support on our
              </article>
            </p>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center">
              <Image src="/bg48.png" width="120px" height="60px" />
            </div>
            <p>
              <article className="text-title">
                Fund local outreach projects
              </article>
            </p>
            <p>
              <article className="article-quote">
                We partner with No Walls to bring churches together across
                racial barriers.
              </article>
            </p>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center">
              <Image src="/bg50.png" width="120px" height="60px" />
            </div>
            <p>
              <article className="text-title">
                Empower our staff to serve the Church
              </article>
            </p>
            <p>
              <article className="article-quote">
                We’re never more fulfilled than when we help others. We want you
                to find out where you fit into the Mosaic.
              </article>
            </p>
          </div>
        </div>
        <div className="row section py-4">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Button text="GIVE OR PAY TITHE ONLINE" />
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="h-line"></div>
        <div className="row section">
          <div className="col-md-6">
            <h1 className="article-title">Giving</h1>
            <p>
              <article className="article-quote">
                Folks who support us in our projects see first hand where their
                money is going. It could be local or world missions, helping
                church and non-churched families, professional Christian
                counseling for the hurting, or supporting youth, children, and
                community efforts. Our goal is to be great stewards of all God
                entrusts us with.
              </article>
            </p>
            <p>
              <article className="article-quote">
                “Each one of you should give what you have decided in your heart
                to give. You should not give if it makes you unhappy or if you
                feel forced to give. God loves those who are happy to give.”
              </article>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Give;
