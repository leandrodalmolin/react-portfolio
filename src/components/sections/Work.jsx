import { useState } from 'react';
import { ImageLink } from '../ui/ImageLink';

import workImg1 from '../../assets/images/work/w-1.jpg';
import workImg2 from '../../assets/images/work/w-2.jpg';
import workImg3 from '../../assets/images/work/w-3.jpg';
import workImg4 from '../../assets/images/work/w-4.jpg';

export function Work() {
  const [bgColorClass, setBgColorClass] = useState('bg-zinc-100');

  const bgColorHandler = (bgColor) => {
    setBgColorClass(bgColor);
  };

  return (
    <section id="work" className={`transition-colors duration-500 ${bgColorClass}`}>
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
  );
}