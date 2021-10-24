import { NextPage } from "next";
import Link from "next/link";

interface Props {
  text?: string;
  linkTo?: string;
}

const ButtonLink: NextPage<Props> = ({ text, linkTo }) => {
  return (
    <Link href={linkTo ? linkTo : "#"}>
      <a style={{ fontSize: 18 }} className="btn-contain py-3">
        {text}
      </a>
    </Link>
  );
};

export default ButtonLink;
