import { NextPage } from "next";
import Link from "next/link";
interface Props {
  title?: string;
  date?: string;
  speaker?: string;
  linkTo?: string;
}
const MessageTitle: NextPage<Props> = ({ title, date, speaker, linkTo }) => {
  return (
    <Link href={linkTo ? linkTo : "#"} as={linkTo}>
      <a>
        <p className="text-underline mt-2 cursor-pointer">
          <article className="article-title">{title}</article>
          <article className="article-quote">
            <span style={{ paddingRight: 8 }} className="pr-2">
              {date}
            </span>
            <span>{speaker}</span>
          </article>
        </p>
      </a>
    </Link>
  );
};

MessageTitle.defaultProps = {
  title: "Acts of the Apostles",
  date: "Jan 24, 2021",
  speaker: "Pastor Godson Ajaero",
  linkTo: "/messages/2",
};

export default MessageTitle;
