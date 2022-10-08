import { Link } from "react-scroll";
import { Section } from "../abstracts/Section";
import { Wrapper } from "../abstracts/Wrapper";
import { FadeIn } from "../utils/FadeIn";
import { FadeInScroll } from "../utils/FadeInScroll";

export function Home() {
  return (
    <Section
      theme="dark"
      id="home"
      extraClasses="relative h-[34rem] md:h-screen flex items-center justify-center"
    >
      <Wrapper type="md" extraClasses="text-center">
        <FadeInScroll>
          <FadeIn delay="500">
            <h1 className="text-3xl text-white font-bold mb-5 font-serif sm:text-4xl sm:mb-8">
              Hi, I'm Leandro!
            </h1>
            <p className="text-xl sm:text-3xl">
              A web developer focused on creating interactive digital
              experiences on the web.
            </p>
          </FadeIn>
        </FadeInScroll>
      </Wrapper>

      <div className="absolute bottom-0 left-0 right-0 mx-auto text-center">
        <Link
          smooth="easeOutQuart"
          duration={1500}
          spy={true}
          to="work"
          href="#work"
          className="inline-block w-5"
        >
          <span className="relative block -rotate-90 mb-2 -left-[3px]">
            scroll
          </span>
          <span className="block w-[2px] h-5 bg-zinc-100 mx-auto"></span>
        </Link>
      </div>
    </Section>
  );
}
