import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

import cvPdf from "../../assets/docs/leandro-dal-molin-cv.pdf";
import { Link } from "../ui/Link";

export function About() {
  return (
    <section id="about">
      <div className="max-w-2xl mx-auto py-20 md:py-28 px-5">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase font-medium">Who am I?</p>
          <h2 className="text-4xl text-white font-serif font-bold sm:text-5xl">
            About Me
          </h2>
        </div>
        <div className="text-center">
          <h4 className="leading-tight font-bold text-zinc-300 mb-1 sm:text-xl sm:mb-0">
            My name is Leandro Dal Molin.
          </h4>
          <h5 className="leading-tight font-bold text-zinc-300 mb-4 sm:text-xl sm:mb-5">
            A full-stack developer mostly focused on the front-end.
          </h5>
          <p className="sm:text-lg mb-5">
            My interest in web development started back in 2000 building
            websites on Microsoft FrontPage (I know) about my favourite bands.
          </p>
          <p className="sm:text-lg">
            Since then, I've graduated, had the chance to work on a variety of
            projects (software and web) and finally moved from Brazil to England
            in 2017, where I've been working as a web developer building
            websites for local businesses and golf clubs throughout the UK at
            Artworking/Golfworking.
          </p>

          <ul className="flex flex-wrap justify-center mt-11 gap-x-4 gap-y-2 sm:gap-x-7 sm:text-lg">
            <li>
              <Link
                className="flex items-center gap-2"
                href={cvPdf}
                target="_blank"
              >
                <FaFileAlt /> CV
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2"
                href="https://www.linkedin.com/in/leandrodalmolin/"
                target="_blank"
              >
                <FaLinkedin /> LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2"
                href="https://www.github.com/leandrodalmolin"
                target="_blank"
              >
                <FaGithub /> GitHub
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2"
                href="mailto:leandro.swk@hotmail.com"
              >
                <FaEnvelope className="inline-block" /> Email
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
