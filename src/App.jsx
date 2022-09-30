import { useState } from 'react';
import { Article, GithubLogo, LinkedinLogo, Envelope } from 'phosphor-react';
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
          <p className="text-xl sm:text-2xl">A web developer with experience building websites for local businesses and golf clubs throughout the UK.</p>
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
        <div className="max-w-3xl mx-auto py-20 md:py-28 px-5">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase font-medium">Who am I?</p>
            <h2 className="text-4xl text-white font-serif font-bold sm:text-5xl">About Me</h2>
          </div>
          <div className="text-center">
            <p className="text-lg mb-4 text-zinc-300 sm:text-xl">Originally from Brazil, I arrived in Bristol in 2017 and I've been working as a Web Developer
            at Artworking/Golfworking.</p>
            <p className="sm:text-lg">It's a small but busy company where I've been building websites for local businesses
            and golf clubs throughout the UK using an array of technologies like PHP (Wordpress), 
            MySQL, Javascript, jQuery, HTML and CSS (Sass).</p>
            <ul className="flex flex-wrap justify-center mt-11 gap-x-4 gap-y-2 sm:gap-x-7 sm:text-lg">
                <li>
                  <a
                    className="hover:text-white flex items-center gap-1 transition-colors"
                    href={cvPdf}
                    target="_blank"
                  >
                    <Article /> CV
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white flex items-center gap-1 transition-colors"
                    href="https://www.linkedin.com/in/leandrodalmolin/"
                    target="_blank"
                  >
                    <LinkedinLogo /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white flex items-center gap-1 transition-colors"
                    href="https://www.github.com/leandrodalmolin"
                    target="_blank"
                  >
                    <GithubLogo /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white flex items-center gap-1 transition-colors"
                    href="mailto:leandro.swk@hotmail.com"
                  >
                    <Envelope className="inline-block" /> Email
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
