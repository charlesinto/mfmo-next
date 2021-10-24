import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

interface Props {
  linkTo?: string;
  posterImageUrl?: string;
  month?: string;
  day?: string;
}

const EventPosterCard: NextPage<Props> = ({
  linkTo,
  posterImageUrl,
  month,
  day,
}) => {
  return (
    <Link href={linkTo ? linkTo : "#"} as={linkTo}>
      <div
        className={`${styles["ministriesCard"]} ${styles["events-card-1"]}`}
        style={{ backgroundImage: `url(${posterImageUrl})` }}
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
              {month}
            </h6>
            <h6 style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
              {day}
            </h6>
          </div>
        </div>
      </div>
    </Link>
  );
};

EventPosterCard.defaultProps = {
  posterImageUrl: "/bg17.png",
  month: "Feb",
  day: "21",
  linkTo: "#",
};

export default EventPosterCard;
