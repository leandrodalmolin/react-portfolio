import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Section } from "../abstracts/Section";
import { Wrapper } from "../abstracts/Wrapper";
import { Heading } from "../ui/Heading";
import { Link } from "../ui/Link";
import { FadeInScroll } from "../utils/FadeInScroll";

export function Projects() {
  return (
    <Section theme="dark" id="projects">
      <Wrapper type="lg" extraClasses="text-center">
        <FadeInScroll>
          <Heading text="Side Projects" subText="Pinned from GitHub" />
        </FadeInScroll>
        <FadeInScroll>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 text-left">
            <div className="bg-zinc-800 rounded-md p-7">
              <h2 className="text-xl text-zinc-100 font-bold mb-3">
                URL Shortener
              </h2>
              <p className="mb-4">
                Integration with API to create shortened URLs and display them
                on the landing page.
              </p>
              <p>
                <Link
                  extraClasses="flex inline-flex items-center gap-2"
                  href="https://github.com/leandrodalmolin/url-shortening-front"
                  target="_blank"
                >
                  <FaGithub size={12} />
                  Landing page repository
                </Link>
              </p>
              <p>
                <Link
                  extraClasses="flex inline-flex items-center gap-2"
                  href="https://github.com/leandrodalmolin/url-shortening-server"
                  target="_blank"
                >
                  <FaGithub size={12} />
                  Serverless API repository
                </Link>
              </p>
              <p>
                <Link
                  extraClasses="flex inline-flex items-center gap-2"
                  href="https://shrtl.netlify.app"
                  target="_blank"
                >
                  <FaExternalLinkAlt size={12} />
                  See live demo
                </Link>
              </p>
            </div>

            <div className="bg-zinc-800 rounded-md p-7">
              <h2 className="text-xl text-zinc-100 font-bold mb-3">Personal Website</h2>
              <p className="mb-4">Feature some of my work, side projects and a little about me. Built with <span className="text-zinc-300">React</span>, <span className="text-zinc-300">Tailwind CSS</span> and <span className="text-zinc-300">Vite</span>.</p>
              <p>
                <Link
                  extraClasses="flex inline-flex items-center gap-2"
                  href="https://github.com/leandrodalmolin/react-portfolio"
                  target="_blank"
                >
                  <FaGithub size={12} />
                  Repository
                </Link>
              </p>
            </div>
          </div>
        </FadeInScroll>
      </Wrapper>
    </Section>
  );
}