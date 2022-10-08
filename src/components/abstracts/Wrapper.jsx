export function Wrapper(props) {
  const { type, children, extraClasses, ...rest } = props;
  let typeClasses = "";

  switch (type) {
    case "xl":
      typeClasses = "max-w-7xl";
      break;
    case "lg":
      typeClasses = "max-w-4xl";
      break;
    case "md":
      typeClasses = "max-w-3xl";
      break;
    case "normal":
    default:
      typeClasses = "max-w-2xl";
  }

  return (
    <div className={`${typeClasses} mx-auto px-6 ${extraClasses ?? ""}`} {...rest}>
      {children}
    </div>
  );
}