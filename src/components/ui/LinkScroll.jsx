import { Link } from "react-scroll";

export function LinkScroll(props) {
  const { extraClasses } = props;

  return (
    <Link
      smooth="easeOutQuart"
      duration={1500}
      spy={true}
      activeClass="text-white"
      className={`hover:text-white transition-colors ${extraClasses ?? ""}`}
      {...props}
    >
      {props.children}
    </Link>
  );
}
