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
    <section id="tech" className="py-20 md:py-28 px-5 bg-zinc-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-3 text-xs uppercase font-medium">Technologies I Use</p>
        <h2 className="text-4xl text-zinc-800 font-serif font-bold sm:text-5xl">
          Skill Set
        </h2>
        <ul className="flex flex-wrap justify-center mt-20 gap-16 text-zinc-700">
          <li>
            <FaPhp className="w-24 h-20" />
          </li>
          <li>
            <FaWordpress className="w-20 h-20" />
          </li>
          <li>
            <FaJsSquare className="w-20 h-20" />
          </li>
          <li>
            <FaHtml5 className="w-20 h-20" />
          </li>
          <li>
            <FaCss3Alt className="w-20 h-20" />
          </li>
          <li>
            <FaSass className="w-20 h-20" />
          </li>
        </ul>
      </div>
    </section>
  );
}
