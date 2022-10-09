import { Link as ReactScrollLink } from "react-scroll";

export function LinkScroll(props) {
  const { extraClasses, ...rest } = props;

  return (
    <ReactScrollLink
      smooth="easeOutQuart"
      duration={1500}
      spy={true}
      activeClass="text-white"
      className={`hover:text-white theme-light:hover:text-zinc-900 transition-colors ${extraClasses ?? ""}`}
      {...rest}
    >
      {props.children}
    </ReactScrollLink>
  );
}
