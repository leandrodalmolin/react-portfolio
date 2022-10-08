import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

import cvPdf from "../../assets/docs/leandro-dal-molin-cv.pdf";
import { Link } from "../ui/Link";

export function About() {
  return (
    <section id="about" className="flex items-center min-h-screen bg-zinc-100">
      <div className="max-w-2xl mx-auto py-20 md:py-28 px-6 text-center">
        <p className="mb-3 text-xs uppercase font-medium">Who am I?</p>
        <h2 className="mb-14 text-4xl text-zinc-900 font-serif font-bold sm:text-5xl">
          About Me
        </h2>
        <h4 className="leading-tight font-bold text-zinc-800 mb-1 sm:text-xl sm:mb-0">
          My name is Leandro Dal Molin.
        </h4>
        <h5 className="leading-tight font-bold text-zinc-800 mb-4 sm:text-xl sm:mb-5">
          A full-stack developer mostly focused on the front-end.
        </h5>
        <p className="text-zinc-600 sm:text-lg mb-5">
          My interest in web development started back in 2000 building websites
          on Microsoft FrontPage (I know) about my favourite bands.
        </p>
        <p className="text-zinc-600 sm:text-lg">
          Since then, I've graduated, had the chance to work on a variety of
          projects (software and web) and finally moved from Brazil to England
          in 2017, where I've been working as a web developer building websites
          for local businesses and golf clubs throughout the UK at
          Artworking/Golfworking.
        </p>

        <ul className="flex flex-wrap justify-center mt-11 gap-x-4 gap-y-2 sm:gap-x-7 sm:text-lg text-zinc-500">
          <li>
            <Link
              extraClasses="flex inline-flex items-center gap-2 hover:text-zinc-900"
              href={cvPdf}
              target="_blank"
            >
              <FaFileAlt /> CV
            </Link>
          </li>
          <li>
            <Link
              extraClasses="flex inline-flex items-center gap-2 hover:text-zinc-900"
              href="https://www.linkedin.com/in/leandrodalmolin/"
              target="_blank"
            >
              <FaLinkedin /> LinkedIn
            </Link>
          </li>
          <li>
            <Link
              extraClasses="flex inline-flex items-center gap-2 hover:text-zinc-900"
              href="https://www.github.com/leandrodalmolin"
              target="_blank"
            >
              <FaGithub /> GitHub
            </Link>
          </li>
          <li>
            <Link
              extraClasses="flex inline-flex items-center gap-2 hover:text-zinc-900"
              href="mailto:leandro.swk@hotmail.com"
            >
              <FaEnvelope className="inline-block" /> Email
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
