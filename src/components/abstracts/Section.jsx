export function Section(props) {
  const { theme, extraClasses, children, ...rest } = props;

  const lightClasses = "theme-light:bg-zinc-100 theme-light:text-zinc-600";
  const darkClasses = "theme-dark:bg-zinc-900 theme-dark:text-zinc-400";

  return (
    <section
      className={`theme-${theme} ${lightClasses} ${darkClasses} py-20 md:py-28 ${ extraClasses ?? "" }`}
      {...rest}
    >
      {children}
    </section>
  );
}
