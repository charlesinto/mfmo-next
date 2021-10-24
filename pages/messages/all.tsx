import type { NextPage } from "next";
import { Meta } from "../../components/Meta";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import EventPosterCard from "../../components/EventPosterCard";
import EventRow from "../../components/EventRow";
import MessageTitle from "../../components/MessagTitleRow";
import Button from "../../components/Button";
import ButtonLink from "../../components/ButtonLink";
import MessageRow from "../../components/MessageTitle";

const MessageAll = () => {
  return (
    <>
      <Meta title="MFMO - Messages" />
      <div style={{ position: "relative" }} className={styles.bannerContainer}>
        <Image src="/bg44.png" layout="fill" />
      </div>
      <div className="container">
        <div className="row section">
          <div className="col-md-8">
            <MessageRow />
            <MessageRow />
            <MessageRow />
            <MessageRow />
            <MessageRow />
            <MessageRow />
            <MessageRow />
            <p className="py-4">
              <ButtonLink linkTo="/messages/all" text="View All Message" />
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <h1 className="article-title">About our Message</h1>
            </p>
            <p>
              <article className="article-quote">
                The narrative around Dominion is based on the Bible. We take the
                teaching of God's Word very seriously. We don't use the Bible as
                a hammer to continually remind people of their shortcomings.
              </article>
            </p>
            <p>
              <article className="article-quote">
                We believe the Holy Spirit is more than capable of bringing
                conviction and change in people's lives as we are obedient to
                solid preaching and teaching.
              </article>
            </p>
            <p>
              <article className="article-quote text-blue">
                Subscribe to our Podcasy
              </article>
            </p>
            <p>
              <h1 className="article-title">Categories</h1>
            </p>
            <p>
              <article className="article-quote">Acts</article>
              <article className="article-quote">Galatians</article>
            </p>
            <p>
              <h1 className="article-title">Speakers</h1>
            </p>
            <p>
              <article className="article-quote">Pastor Godson Ajaero</article>
              <article className="article-quote">Pastor Happiness</article>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageAll;
