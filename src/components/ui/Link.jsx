export function Link(props) {
  const { type = "default", extraClasses, ...rest } = props;
  
  // Default
  let variationClasses = "hover:text-zinc-100 theme-light:hover:text-zinc-900";

  if (type === "border") {
    variationClasses = "font-bold border-2 text-zinc-300 border-zinc-100/20 rounded-md text-sm px-6 py-2 sm:text-base sm:px-5 hover:border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900";
  }

  return (
    <a
      className={`duration-300 transition-colors ${variationClasses} ${extraClasses ?? ""}`}
      {...rest}
    >
      {props.children}
    </a>
  );
}