import { useState } from 'react';
import { ImageLink } from './components/ImageLink';

import workImg1 from './assets/images/work/w-1.jpg';
import workImg2 from './assets/images/work/w-2.jpg';
import workImg3 from './assets/images/work/w-3.jpg';
import workImg4 from './assets/images/work/w-4.jpg';

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
        <div className="max-w-3xl mx-10 text-center">
          <h1 className="text-5xl text-white font-bold mb-8">Hi, I'm Leandro!</h1>
          <p className="text-3xl">A web developer with experience building websites for local businesses and golf clubs throughout the UK.</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 mx-auto text-center">
          <a href="#selected-work" className="inline-block w-5">
            <span className="relative block -rotate-90 mb-2 -left-[3px]">scroll</span>
            <span className="block w-[2px] h-5 bg-zinc-100 mx-auto"></span>
          </a>
        </div>
      </section>

      <section id="selected-work" className={`transition-colors duration-500 ${bgColorClass}`}>
        <div className="max-w-7xl mx-auto py-32 px-5 text-center">
          <p className="mb-1 text-xs uppercase font-medium">© Artworking/Golfworking</p>
          <h2 className="text-zinc-800 inverse-active:text-white text-5xl font-bold transition-colors duration-500">Selected Work</h2>
        </div>

        <div className="flex flex-col mx-11">
          <div
            className="w-8/12 hover:scale-[1.01] transition-transform duration-500 self-end mb-40"
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
            className="w-8/12 hover:scale-[1.01] transition-transform duration-500 self-start mb-40"
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
            className="w-8/12 hover:scale-[1.01] transition-transform duration-500 self-end mb-40"
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
            className="w-8/12 hover:scale-[1.01] transition-transform duration-500 self-start mb-28"
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
        <div className="max-w-3xl mx-auto py-28 px-5">
          <div className="mb-14 text-center">
            <p className="mb-1 text-xs uppercase font-medium">Who am I?</p>
            <h2 className="text-5xl text-white font-bold">About Me</h2>
          </div>
          <div className="text-center">
            <p className="text-xl mb-4 text-zinc-300">Originally from Brazil, I arrived in Bristol in 2017 I've been working as a Web Developer
            at Artworking/Golfworking since then.</p>
            <p className="text-lg">It's a small but busy company where I've been building websites for local businesses
            and golf clubs throughout the UK using an array of technologies like PHP (Wordpress), 
            MySQL, Javascript, jQuery, HTML and CSS (Sass).</p>
            <img
              className="inline-block max-w-[180px] rounded-xl mt-10"
              src="https://www.github.com/leandrodalmolin.png"
              alt="Leandro Dal Molin"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
