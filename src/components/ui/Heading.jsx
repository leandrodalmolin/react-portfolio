export function Heading(props) {
  const { text, subText } = props;

  return (
    <>
      <p className="mb-3 text-xs uppercase font-medium">
        {subText}
      </p>
      <h2 className="mb-14 md:mb-20 text-4xl text-zinc-100 theme-light:text-zinc-900 font-serif font-bold sm:text-5xl">
        {text}
      </h2>
    </>
  );
}