import { useState } from 'react';
import { FaCss3Alt, FaEnvelope, FaFileAlt, FaGithub, FaHtml5, FaJsSquare, FaLinkedin, FaPhp, FaSass, FaWordpress, FaWordpressSimple } from "react-icons/fa";
import { ImageLink } from './components/ImageLink';

import workImg1 from './assets/images/work/w-1.jpg';
import workImg2 from './assets/images/work/w-2.jpg';
import workImg3 from './assets/images/work/w-3.jpg';
import workImg4 from './assets/images/work/w-4.jpg';
import cvPdf from './assets/docs/leandro-dal-molin-cv.pdf';

function App() {
  const [bgColorClass, setBgColorClass] = useState('bg-zinc-100');

  const bgColorHandler = (bgColor) => {
    setBgColorClass(bgColor);
  };

  return (
    <>
      {/* <header className="fixed w-full z-10">
        <nav className="flex justify-between max-w-7xl mx-auto p-5">
          <div className="flex items-center justify-center w-10 h-10 bg-white text-zinc-700">
            ld.
          </div>

          <ul className="flex gap-6">
            <li>Selected Work</li>
            <li>About</li>
            <li>Personal Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header> */}

      <section className="relative w-full h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-5 text-center">
          <h1 className="text-3xl text-white font-bold mb-5 font-serif sm:text-4xl sm:mb-8">Hi, I'm Leandro!</h1>
          <p className="text-xl sm:text-3xl">A web developer focused on creating interactive digital experiences on the web.</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 mx-auto text-center">
          <a href="#selected-work" className="inline-block w-5">
            <span className="relative block -rotate-90 mb-2 -left-[3px]">scroll</span>
            <span className="block w-[2px] h-5 bg-zinc-100 mx-auto"></span>
          </a>
        </div>
      </section>

      <section id="selected-work" className={`transition-colors duration-500 ${bgColorClass}`}>
        <div className="max-w-7xl mx-auto pt-32 pb-14 px-5 text-center sm:py-32">
          <p className="mb-3 text-xs uppercase font-medium sm:mb-5">© Artworking/Golfworking</p>
          <h2 className="text-zinc-800 inverse-active:text-white text-4xl font-serif font-bold leading-[1.1] transition-colors duration-500 sm:text-5xl">Selected Work</h2>
        </div>

        <div className="flex flex-col mx-5 sm:mx-11">
          <div
            className="w-full md:w-[70vw] hover:scale-[1.01] transition-transform duration-500 self-end mb-[12vw]"
            onMouseEnter={bgColorHandler.bind(this, 'bg-[#111b36] inverse')}
            onMouseLeave={bgColorHandler.bind(this, 'bg-zinc-100')}
          >
            <ImageLink
              title="Royal Lytham & St Annes Golf Club"
              url="https://www.royallytham.org/"
              image={workImg1}
            />
          </div>
          
          <div
            className="w-full md:w-[70vw] hover:scale-[1.01] transition-transform duration-500 self-start mb-[12vw]"
            onMouseEnter={bgColorHandler.bind(this, 'bg-[#98002e] inverse')}
            onMouseLeave={bgColorHandler.bind(this, 'bg-zinc-100')}
          >
            <ImageLink
              title="Hot Sauce Emporium"
              url="https://www.hotsauceemporium.co.uk/"
              image={workImg2}
            />
          </div>

          <div
            className="w-full md:w-[70vw] hover:scale-[1.01] transition-transform duration-500 self-end mb-[12vw]"
            onMouseEnter={bgColorHandler.bind(this, 'bg-[#2f3543] inverse')}
            onMouseLeave={bgColorHandler.bind(this, 'bg-zinc-100')}
          >
            <ImageLink
              title="Royal St.David's Golf Club"
              url="https://www.royalstdavids.co.uk/"
              image={workImg3}
            />
          </div>

          <div
            className="w-full md:w-[70vw] hover:scale-[1.01] transition-transform duration-500 self-start mb-[12vw]"
            onMouseEnter={bgColorHandler.bind(this, 'bg-[#29452A] inverse')}
            onMouseLeave={bgColorHandler.bind(this, 'bg-zinc-100')}
          >
            <ImageLink
              title="Congo Falls"
              url="https://www.congofalls.co.uk/"
              image={workImg4}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto py-20 md:py-28 px-5">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase font-medium">Pinned from GitHub</p>
            <h2 className="text-4xl text-white font-serif font-bold sm:text-5xl">Side Projects</h2>
          </div>
          <div className="flex gap-10">
            <div className="flex-1 h-40 bg-zinc-100"></div>
            <div className="flex-1 h-40 bg-zinc-100"></div>
            <div className="flex-1 h-40 bg-zinc-100"></div>
            <div className="flex-1 h-40 bg-zinc-100"></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-5 bg-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-3 text-xs uppercase font-medium">Technologies I Use</p>
          <h2 className="text-4xl text-zinc-800 font-serif font-bold sm:text-5xl">Skill Set</h2>
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

      <section>
        <div className="max-w-2xl mx-auto py-20 md:py-28 px-5">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase font-medium">Who am I?</p>
            <h2 className="text-4xl text-white font-serif font-bold sm:text-5xl">About Me</h2>
          </div>
          <div className="text-center">
            <h4 className="leading-tight font-bold text-zinc-300 mb-1 sm:text-xl sm:mb-0">My name is Leandro Dal Molin.</h4>
            <h5 className="leading-tight font-bold text-zinc-300 mb-4 sm:text-xl sm:mb-5">A full-stack developer mostly focused on the front-end.</h5>
            <p className="sm:text-lg mb-5">My interest in web development started back in 2000 building websites on Microsoft FrontPage (I know) about my favourite bands.</p>
            <p className="sm:text-lg">Since then, I've graduated, had the chance to work on a variety of projects (software and web) and finally moved from Brazil to England in 2017, where I've been working as a web developer building websites for local businesses and golf clubs throughout the UK at Artwroking/Golfworking.</p>

            
            <ul className="flex flex-wrap justify-center mt-11 gap-x-4 gap-y-2 sm:gap-x-7 sm:text-lg">
              <li>
                <a
                  className="hover:text-white flex items-center gap-2 transition-colors"
                  href={cvPdf}
                  target="_blank"
                >
                  <FaFileAlt /> CV
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white flex items-center gap-2 transition-colors"
                  href="https://www.linkedin.com/in/leandrodalmolin/"
                  target="_blank"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white flex items-center gap-2 transition-colors"
                  href="https://www.github.com/leandrodalmolin"
                  target="_blank"
                >
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white flex items-center gap-2 transition-colors"
                  href="mailto:leandro.swk@hotmail.com"
                >
                  <FaEnvelope className="inline-block" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
