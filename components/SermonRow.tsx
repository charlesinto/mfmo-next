import { NextPage } from "next";
import Link from "next/link";
interface Props {
  title?: string;
  date?: string;
  linkTo?: string;
}
const SermonRow: NextPage<Props> = ({ title, date, linkTo }) => {
  return (
    <div className="row section text-underline  mb-3 cursor-pointer bg-grey py-4 px-3">
      <div className="col-md-2">
        <div className="d-flex justify-content-center align-items-center">
          <span>
            <i
              style={{ fontSize: 50, color: "#ff0000" }}
              className="ion ion-md-mic"
            ></i>
          </span>
        </div>
      </div>
      <div className="col-md-10">
        <p className="">
          <article className="article-title">{title}</article>
          <article className="article-quote">
            <span style={{ paddingRight: 8 }} className="pr-2 text-red">
              {date}
            </span>
          </article>
        </p>
      </div>
    </div>
  );
};

SermonRow.defaultProps = {
  title: "Acts of the Apostles",
  date: "Jan 24, 2021",
  linkTo: "/messages/2",
};

export default SermonRow;
