import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "./Link";
import { FaLongArrowAltRight } from "react-icons/fa";

export function Card(props) {
  const { title, description, url, imageSrc, placeholderImageSrc, extraClasses } = props;

  return (
    <div
      className={`group text-left px-[10%] pt-[10%] md:pt-[8%] pb-0 bg-zinc-800 ${
        extraClasses ?? ""
      }`}
    >
      <h2 className="mb-4 md:mb-7 text-2xl text-white font-bold">{title}</h2>
      <div className="md:duration-[1.5s] md:ease-[cubic-bezier(0.65, 0, 0.35, 1)] md:transition-all md:invisible md:max-h-0 md:opacity-0 group-hover:md:visible group-hover:md:max-h-[800px] group-hover:md:opacity-100">
        <p className="mb-6 text-white/60 text-sm leading-relaxed">
          {description}
        </p>
        <p className="text-sm">
          <Link
            extraClasses="flex inline-flex items-center gap-2 border-b-2 border-white/20 text-white/60"
            href={url}
          >
            Visit Website
            <FaLongArrowAltRight />
          </Link>
        </p>
      </div>
      <div className="mt-10 md:mt-0 group-hover:md:mt-10 md:ease-[cubic-bezier(0.65, 0, 0.35, 1)] md:duration-[1.5s] md:transition-[margin] border-white/10 border-x-8 border-t-8 rounded-tl-md rounded-tr-md overflow-hidden">
        <LazyLoadImage
          className="block"
          src={imageSrc}
          placeholderSrc={placeholderImageSrc}
          alt={title}
        />
      </div>
    </div>
  );
}
