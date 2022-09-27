export function ImageLink(props) {
  return(
    <a
      className="text-zinc-900 inverse-active:text-white transition-colors duration-500"
      href={props.url}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <img className="w-full" src={props.image} alt={props.title} />
      <span className="inline-block text-xl font-bold mt-3">{props.title}</span>
    </a>
  );
}