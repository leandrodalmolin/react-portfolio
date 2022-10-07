export function Link(props) {
  const { extraClasses, ...rest } = props; 

  return (
    <a
      className={`hover:text-white transition-colors ${extraClasses ?? ""}`}
      {...rest}
    >
      {props.children}
    </a>
  );
}