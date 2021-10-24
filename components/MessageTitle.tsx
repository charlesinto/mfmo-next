import { NextPage } from "next";
import Link from "next/link";
interface Props {
  title?: string;
  date?: string;
  linkTo?: string;
}
const MessageRow: NextPage<Props> = ({ title, date, linkTo }) => {
  return (
    <Link href={linkTo ? linkTo : "#"} as={linkTo}>
      <a>
        <p className="text-underline mt-2 cursor-pointer">
          <article className="article-title">{title}</article>
          <article className="article-quote">
            <span style={{ paddingRight: 8 }} className="pr-2 text-red">
              {date}
            </span>
          </article>
        </p>
      </a>
    </Link>
  );
};

MessageRow.defaultProps = {
  title: "Acts of the Apostles",
  date: "Jan 24, 2021",
  linkTo: "/messages/2",
};

export default MessageRow;
