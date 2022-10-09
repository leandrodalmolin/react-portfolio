export function Link(props) {
  const { type = "default", extraClasses, ...rest } = props;
  let variationClasses = "";

  if (type === "border") {
    variationClasses = "font-bold border-2 text-zinc-300 border-white/20 rounded-md text-sm px-6 py-2 sm:text-base sm:px-5 hover:border-white hover:bg-white hover:text-zinc-900";
  }

  return (
    <a
      className={`hover:text-white theme-light:hover:text-zinc-900 duration-300 transition-colors ${variationClasses} ${extraClasses ?? ""}`}
      {...rest}
    >
      {props.children}
    </a>
  );
}