import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "../ui/Link";
import { Wrapper } from "../abstracts/Wrapper";
import { Section } from "../abstracts/Section";
import { Heading } from "../ui/Heading";
import { FadeInScroll } from "../utils/FadeInScroll";
import cvPdf from "../../assets/docs/leandro-dal-molin-cv.pdf";

export function About() {
  return (
    <Section
      theme="dark"
      id="about"
      extraClasses="flex items-center min-h-screen"
    >
      <Wrapper extraClasses="text-center">
        <FadeInScroll>
          <Heading text="About Me" subText="Who am I?" />
        </FadeInScroll>
        <FadeInScroll>
          <p className="font-bold text-zinc-300 theme-light:text-zinc-800 mb-5 text-lg leading-snug sm:leading-normal sm:text-xl">
            <strong>
              My name is Leandro Dal Molin.
              <br />A full-stack developer mostly focused on the front-end.
            </strong>
          </p>

          <p className="sm:text-lg mb-5">
            My interest in web development started back in 2000 building
            websites on Microsoft FrontPage (I know) about my favourite bands.
          </p>
          <p className="sm:text-lg">
            Since then, I've graduated, had the chance to work on a variety of
            projects (software and web) and finally moved from Brazil to England
            in 2017, where I've been working as a web developer building
            websites for local businesses and golf clubs throughout the UK at{" "}
            <Link
              href="https://www.golfworking.co.uk"
              target="_blank"
              rel="nofollow noreferrer noopener"
              extraClasses="border-b-2 border-zinc-100/10 hover:border-zinc-100/30"
            >
              Artworking/Golfworking
            </Link>
            .
          </p>
          <ul className="flex flex-wrap justify-center mt-11 gap-x-4 gap-y-2 sm:gap-x-7 sm:text-lg theme-light:text-zinc-500">
            <li>
              <Link
                extraClasses="flex inline-flex items-center gap-1 sm:gap-2 text-zinc-300 text-base sm:text-lg"
                href={cvPdf}
                target="_blank"
              >
                <FaFileAlt /> CV
              </Link>
            </li>
            <li>
              <Link
                extraClasses="flex inline-flex items-center gap-1 sm:gap-2 text-zinc-300 text-base sm:text-lg"
                href="https://www.linkedin.com/in/leandrodalmolin/"
                target="_blank"
              >
                <FaLinkedin /> LinkedIn
              </Link>
            </li>
            <li>
              <Link
                extraClasses="flex inline-flex items-center gap-1 sm:gap-2 text-zinc-300 text-base sm:text-lg"
                href="https://www.github.com/leandrodalmolin"
                target="_blank"
              >
                <FaGithub /> GitHub
              </Link>
            </li>
            <li>
              <Link
                extraClasses="flex inline-flex items-center gap-1 sm:gap-2 text-zinc-300 text-base sm:text-lg"
                href="mailto:leandro.swk@hotmail.com"
              >
                <FaEnvelope className="inline-block" /> Email
              </Link>
            </li>
          </ul>
        </FadeInScroll>
      </Wrapper>
    </Section>
  );
}
