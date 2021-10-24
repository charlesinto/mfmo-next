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
import SermonRow from "../../components/SermonRow";

const MessageDownload = () => {
  return (
    <>
      <Meta title="MFMO - Messages" />
      <div style={{ position: "relative" }} className={styles.bannerContainer}>
        <Image src="/bg44.png" layout="fill" />
      </div>
      <div className="container">
        <div className="row section">
          <div className="col-md-12">
            <p>
              <article className="text-center article-quote text-red">
                January 20, 2021
              </article>
            </p>
            <p>
              <article className="text-center article-title">
                Acts of Apostles
              </article>
            </p>
          </div>
        </div>
        <div className="row section">
          <div className="col-md-12">
            <p>
              <article className="text-title">
                Listen to the audio of the sermon
              </article>
            </p>
            <SermonRow />
            <SermonRow />
            <SermonRow />
            <SermonRow />
          </div>
        </div>
        <div className="row section">
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center">
              <Button text="Download Sermon Notes" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageDownload;
