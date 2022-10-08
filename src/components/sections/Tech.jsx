import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaPhp,
  FaSass,
  FaWordpress,
} from "react-icons/fa";

export function Tech() {
  return (
    <section id="tech" className="py-20 md:py-28 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-3 text-xs uppercase font-medium">Technologies I Use</p>
        <h2 className="text-4xl text-white font-serif font-bold sm:text-5xl">
          Skill Set
        </h2>
        <ul className="grid grid-cols-3 sm:grid-cols-6 mt-14 md:mt-20 gap-7 md:gap-16 text-zinc-400">
          <li>
            <FaPhp className="w-20 h-16 md:w-24 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100" />
          </li>
          <li>
            <FaWordpress className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100" />
          </li>
          <li>
            <FaJsSquare className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100" />
          </li>
          <li>
            <FaHtml5 className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100" />
          </li>
          <li>
            <FaCss3Alt className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100" />
          </li>
          <li>
            <FaSass className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100" />
          </li>
        </ul>
      </div>
    </section>
  );
}
