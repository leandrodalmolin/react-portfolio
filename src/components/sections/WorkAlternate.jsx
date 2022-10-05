import { ImageLink } from "../ui/ImageLink";

import workImg1 from "../../assets/images/work/w-1.jpg";
import workImg2 from "../../assets/images/work/w-2.jpg";
import workImg3 from "../../assets/images/work/w-3.jpg";
import workImg4 from "../../assets/images/work/w-4.jpg";

export function WorkAlternate() {
  return (
    <section id="work" className="bg-zinc-100">
      <div className="max-w-7xl mx-auto py-14 sm:py-32 px-5">
        <div className="pb-14 text-center sm:pb-32">
          <p className="mb-3 text-xs uppercase font-medium sm:mb-5">
            © Artworking/Golfworking
          </p>
          <h2 className="text-zinc-800 inverse-active:text-white text-4xl font-serif font-bold leading-[1.1] transition-colors duration-500 sm:text-5xl">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 md:gap-16">
          <div className="hover:-translate-y-[0.1rem] transition-transform duration-500">
            <ImageLink
              title="Royal Lytham & St Annes Golf Club"
              url="https://www.royallytham.org/"
              image={workImg1}
            />
          </div>

          <div className="hover:-translate-y-[0.2rem] transition-transform duration-500">
            <ImageLink
              title="Hot Sauce Emporium"
              url="https://www.hotsauceemporium.co.uk/"
              image={workImg2}
            />
          </div>

          <div className="hover:-translate-y-[0.2rem] transition-transform duration-500">
            <ImageLink
              title="Royal St.David's Golf Club"
              url="https://www.royalstdavids.co.uk/"
              image={workImg3}
            />
          </div>

          <div className="hover:-translate-y-[0.2rem] transition-transform duration-500">
            <ImageLink
              title="Congo Falls"
              url="https://www.congofalls.co.uk/"
              image={workImg4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
