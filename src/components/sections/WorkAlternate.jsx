import { Card } from "../ui/Card";

import rlImage from "../../assets/images/work/rl-work.jpg";
import sdImage from "../../assets/images/work/sd-work.jpg";
import gwImage from "../../assets/images/work/gw-work.jpg";
import cgImage from "../../assets/images/work/cf-work.jpg";
import spcImage from "../../assets/images/work/spc-work.jpg";

const WORK_DATA = [
  {
    title: "GolfWorking",
    description: "GolfWorking specialise in building websites for golf clubs, with clients throughout UK and Ireland.",
    url: "https://www.golfworking.co.uk/",
    imageSrc: gwImage,
    brandColor: "#222",
  },
  {
    title: "Royal Lytham & St Annes Golf Club",
    description: "One of the premier links courses in the World, host to eleven Open Championships, two Ryder Cups and numerous other major tournaments.",
    url: "https://www.royallytham.org/",
    imageSrc: rlImage,
    brandColor: "#111b36",
  },
  {
    title: "Royal St. David's Golf Club",
    description: "Established in 1894, the Harlech links has long been ranked within the ‘Top Fifty’ of British golf courses, and most recently ranked 2nd in the Top 50 Courses in Wales by Golf World.",
    url: "https://www.royalstdavids.co.uk/",
    imageSrc: sdImage,
    brandColor: "#2f3543",
  },
  {
    title: "Congo Falls",
    description: "Congo Falls Adventure Golf is a spectacular outdoor mini golf course suitable for adults of all ages and families.",
    url: "https://www.congofalls.co.uk/",
    imageSrc: cgImage,
    brandColor: "#29452A",
  },
  {
    title: "SPC Group",
    description: "Leading global manufacturer of rubber compounds, specialise in technically demanding high quality materials used in seals, gaskets, hoses and more.",
    url: "https://www.spc-group.com/",
    imageSrc: spcImage,
    brandColor: "#002856",
  }
];

export function WorkAlternate() {
  return (
    <section id="work" className="bg-zinc-100">
      <div className="max-w-7xl mx-auto py-14 sm:py-32 px-5">
        <div className="pb-14 text-center sm:pb-20 lg:pb-32">
          <p className="mb-3 text-xs uppercase font-medium sm:mb-5">
            © Artworking/Golfworking
          </p>
          <h2 className="text-zinc-800 inverse-active:text-white text-4xl font-serif font-bold leading-[1.1] transition-colors duration-500 sm:text-5xl">
            Selected Work
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-5 md:gap-10">
          {WORK_DATA.map((work, index) => {
            const lastItem = (WORK_DATA.length - 1) === index;
            const centerWidowClasses = lastItem ? "md:col-start-2 md:col-end-4" : "md:col-span-2";

            return (
              <div key={work.title} className={`relative rounded-md overflow-hidden md:pb-[100%] lg:pb-[70%] md:h-0 ${centerWidowClasses}`}>
                <div className="md:absolute md:top-0 md:left-0 md:w-full md:h-full">
                  <Card
                    extraClasses={`bg-[${work.brandColor}]`}
                    title={work.title}
                    description={work.description}
                    url={work.url}
                    imageSrc={work.imageSrc}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
