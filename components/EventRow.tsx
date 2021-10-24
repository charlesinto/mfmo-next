import { NextPage } from "next";
import EventPosterCard from "./EventPosterCard";

interface Props {
  linkTo?: string;
  posterImageUrl?: string;
  month?: string;
  day?: string;
  title?: string;
  time?: string;
  details?: string;
  longDay?: string;
}

const EventRow: NextPage<Props> = ({
  posterImageUrl,
  month,
  day,
  longDay,
  time,
  title,
  details,
  linkTo,
}) => {
  return (
    <div className="row section">
      <div className="col-md-4">
        <EventPosterCard
          posterImageUrl={posterImageUrl}
          linkTo={linkTo}
          day={day}
          month={month}
        />
      </div>
      <div className="col-md-8">
        <h1 className="text-title">{title}</h1>
        <p>
          <article className="article-quote">{longDay}</article>
          <article className="article-quote">{time}</article>
        </p>
        <p>
          <article className="article-quote">{details}</article>
        </p>
      </div>
    </div>
  );
};

EventRow.defaultProps = {
  posterImageUrl: "/bg17.png",
  month: "Feb",
  day: "21",
  linkTo: "#",
  title: "Refit (Saturday Class)",
  longDay: "Friday, February 12, 2021",
  time: "9:30AM - 10.30AM",
  details:
    "A safe place for youth to be real, ask questions, and not worry about being judged. We show that the Christian life is fun, exciting, and vital to finding your way through the maze of life.",
};

export default EventRow;
