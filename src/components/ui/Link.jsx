export function Link(props) {
  return (
    <a
      {...props}
      className={`hover:text-white transition-colors ${props.className}`}
    >
      {props.children}
    </a>
  );
}