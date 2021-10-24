import { NextPage } from "next";

interface Props {
  text?: string;
  onClick?: Function;
}

const Button: NextPage<Props> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick ? onClick() : () => null}
      style={{ fontSize: 18 }}
      className="btn-contain py-3"
    >
      {text}
    </button>
  );
};

export default Button;
