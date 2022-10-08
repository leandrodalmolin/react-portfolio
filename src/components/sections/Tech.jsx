import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaPhp,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import { Section } from "../abstracts/Section";
import { Wrapper } from "../abstracts/Wrapper";
import { Heading } from "../ui/Heading";

export function Tech() {
  return (
    <Section theme="light" id="tech">
      <Wrapper type="lg" extraClasses="text-center">
        <Heading text="Skill Set" subText="Technologies I Use" />
        <ul className="grid grid-cols-3 sm:grid-cols-6 mt-14 md:mt-20 gap-7 md:gap-16 text-zinc-400 theme-light:text-zinc-600">
          <li>
            <FaPhp className="w-20 h-16 md:w-24 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100 theme-light:hover:text-zinc-900" />
          </li>
          <li>
            <FaWordpress className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100 theme-light:hover:text-zinc-900" />
          </li>
          <li>
            <FaJsSquare className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100 theme-light:hover:text-zinc-900" />
          </li>
          <li>
            <FaHtml5 className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100 theme-light:hover:text-zinc-900" />
          </li>
          <li>
            <FaCss3Alt className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100 theme-light:hover:text-zinc-900" />
          </li>
          <li>
            <FaSass className="w-16 h-16 md:w-20 md:h-20 mx-auto transition-colors duration-500 hover:text-zinc-100 theme-light:hover:text-zinc-900" />
          </li>
        </ul>
      </Wrapper>
    </Section>
  );
}
