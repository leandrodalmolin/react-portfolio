import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "../ui/Link";

export function Projects() {
  return (
    <section id="projects">
      <div className="max-w-4xl mx-auto py-20 md:py-28 px-5">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase font-medium">
            Pinned from GitHub
          </p>
          <h2 className="text-4xl text-white font-serif font-bold sm:text-5xl">
            Side Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          <div className="bg-zinc-800 rounded-md p-7">
            <h2 className="text-xl text-white font-bold mb-3">URL Shortener</h2>
            <p className="mb-3">
              Integration with API to create shortened URLs and display them on
              the landing page.
            </p>
            <p>
              <Link
                extraClasses="flex inline-flex items-center gap-2"
                href="https://github.com/leandrodalmolin/url-shortening-front"
                target="_blank"
              >
                <FaGithub />
                Landing page repository
              </Link>
            </p>
            <p>
              <Link
                extraClasses="flex inline-flex items-center gap-2"
                href="https://github.com/leandrodalmolin/url-shortening-server"
                target="_blank"
              >
                <FaGithub />
                Serverless API repository
              </Link>
            </p>
            <p>
              <Link 
                extraClasses="flex inline-flex items-center gap-2"
                href="https://shrtl.netlify.app"
                target="_blank"
              >
                <FaExternalLinkAlt />
                See live demo
              </Link>
            </p>
          </div>
          <div className="bg-zinc-800 rounded-md p-7">
            <h2 className="text-xl text-white font-bold mb-3">Cart UI</h2>
            <p className="mb-3">
              Small component made with VueJS that would sit as part of an e-commerce website.
            </p>
            <p>
              <Link
                extraClasses="flex inline-flex items-center gap-2"
                href="https://github.com/leandrodalmolin/cart-ui-challenge"
                target="_blank"
              >
                <FaGithub />
                Repository
              </Link>
            </p>
            <p>
              <Link 
                extraClasses="flex inline-flex items-center gap-2"
                href="https://cart-ui-chlg.netlify.app/"
                target="_blank"
              >
                <FaExternalLinkAlt />
                See live demo
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
