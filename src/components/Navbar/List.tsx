import { Link } from "react-router-dom";

export default function (props: { className?: string; children: any }) {
  return (
    <li className={`w-fit`}>
      <Link className={`${props.className}`} to="#">
        {props.children}
      </Link>
    </li>
  );
}
