import { Meta } from "../components/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";
import Link from "next/link";

const WatchOffline = () => {
  return (
    <>
      <Meta title="MFMO - Watch/Live Video" />
      <div
        className={`${styles["ministriesCard"]} ${styles["events-card-1"]} video-container`}
        style={{ backgroundImage: `url('/bg52.png')` }}
      >
        <div className="green-board">
          <p>
            <h1 className="text-title text-white text-center">Welcome to</h1>
            <h1 className="text-title text-white text-center">
              Marathan Family Mission Outreach online
            </h1>
          </p>
          <p>
            <h1 className="text-title text-white text-center">
              we’re not curently streaming{" "}
            </h1>
            <h1 className="text-title text-white text-center">
              we’ll see you on sunday!
            </h1>
          </p>
          <div className="lower-banner">
            <a
              href="https://web.facebook.com/"
              target="_blank"
              className="h-100 w-100 d-flex flex-direction-column align-items-center justify-content-center"
            >
              <article className="article-quote text-white">
                facebook.com/mfmo
              </article>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchOffline;
