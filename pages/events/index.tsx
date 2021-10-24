import type { NextPage } from "next";
import { Meta } from "../../components/Meta";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import EventPosterCard from "../../components/EventPosterCard";
import EventRow from "../../components/EventRow";

const Events = () => {
  return (
    <>
      <Meta title="MFMO - Events" />
      <div style={{ position: "relative" }} className={styles.bannerContainer}>
        <Image src="/bg32.png" layout="fill" />
      </div>
      <div className="container">
        <EventRow />
        <EventRow />
        <EventRow />
        <EventRow />
        <EventRow />
      </div>
    </>
  );
};

export default Events;
