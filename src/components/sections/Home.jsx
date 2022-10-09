import { Link as ReactScrollLink } from "react-scroll";
import { Section } from "../abstracts/Section";
import { Wrapper } from "../abstracts/Wrapper";
import { Link } from "../ui/Link";
import { FadeIn } from "../utils/FadeIn";
import cvPdf from "../../assets/docs/leandro-dal-molin-cv.pdf";

export function Home() {
  return (
    <Section
      theme="dark"
      id="home"
      extraClasses="relative h-[40rem] md:h-screen flex items-center justify-center"
    >
      <Wrapper type="xl" extraClasses="text-center">
        <FadeIn delay="500">
          <h1 className="text-2xl text-white font-bold mt-8 mb-5 font-serif sm:text-4xl md:text-5xl sm:mb-8">
            Hi, I'm Leandro!
          </h1>
          <p className="text-xl sm:text-3xl md:text-4xl">
            A web developer focused on creating interactive experiences on the
            web.
          </p>
          <p>
            <Link
              type="border"
              href={cvPdf}
              target="_blank"
              extraClasses="inline-block mt-7 md:mt-10"
            >
              Curriculum Vitae
            </Link>
          </p>
        </FadeIn>
      </Wrapper>

      <div className="absolute bottom-0 left-0 right-0 mx-auto text-center">
        <ReactScrollLink
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
        </ReactScrollLink>
      </div>
    </Section>
  );
}
