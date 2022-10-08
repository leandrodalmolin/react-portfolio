export function Link(props) {
  const { extraClasses, ...rest } = props;

  return (
    <a
      className={`hover:text-white theme-light:hover:text-zinc-900 transition-colors ${extraClasses ?? ""}`}
      {...rest}
    >
      {props.children}
    </a>
  );
}