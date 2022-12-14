import { Card } from "../ui/Card";

import rlImage from "../../assets/images/work/rl-work.jpg";
import rlPhImage from "../../assets/images/work/lowres/rl-work.jpg";
import sdImage from "../../assets/images/work/sd-work.jpg";
import sdPhImage from "../../assets/images/work/lowres/sd-work.jpg";
import gwImage from "../../assets/images/work/gw-work.jpg";
import gwPhImage from "../../assets/images/work/lowres/gw-work.jpg";
import cgImage from "../../assets/images/work/cf-work.jpg";
import cgPhImage from "../../assets/images/work/lowres/cf-work.jpg";
import spcImage from "../../assets/images/work/spc-work.jpg";
import spcPhImage from "../../assets/images/work/lowres/spc-work.jpg";
import { Wrapper } from "../abstracts/Wrapper";
import { Section } from "../abstracts/Section";
import { Heading } from "../ui/Heading";
import { FadeInScroll } from "../utils/FadeInScroll";

const WORK_DATA = [
  {
    title: "GolfWorking",
    description:
      "GolfWorking specialise in building websites for golf clubs, with clients throughout UK and Ireland.",
    url: "https://www.golfworking.co.uk/",
    imageSrc: gwImage,
    placeholderImageSrc: gwPhImage,
    bgColor: "bg-[#222]",
  },
  {
    title: "Royal Lytham & St Annes Golf Club",
    description:
      "One of the premier links courses in the World, host to eleven Open Championships, two Ryder Cups and numerous other major tournaments.",
    url: "https://www.royallytham.org/",
    imageSrc: rlImage,
    placeholderImageSrc: rlPhImage,
    bgColor: "bg-[#111b36]",
  },
  {
    title: "Royal St. David's Golf Club",
    description:
      "Established in 1894, the Harlech links has long been ranked within the ‘Top Fifty’ of British golf courses, and most recently ranked 2nd in the Top 50 Courses in Wales by Golf World.",
    url: "https://www.royalstdavids.co.uk/",
    imageSrc: sdImage,
    placeholderImageSrc: sdPhImage,
    bgColor: "bg-[#2f3543]",
  },
  {
    title: "Congo Falls",
    description:
      "Congo Falls Adventure Golf is a spectacular outdoor mini golf course suitable for adults of all ages and families.",
    url: "https://www.congofalls.co.uk/",
    imageSrc: cgImage,
    placeholderImageSrc: cgPhImage,
    bgColor: "bg-[#29452A]",
  },
  {
    title: "SPC Group",
    description:
      "Leading global manufacturer of rubber compounds, specialise in technically demanding high quality materials used in seals, gaskets, hoses and more.",
    url: "https://www.spc-group.com/",
    imageSrc: spcImage,
    placeholderImageSrc: spcPhImage,
    bgColor: "bg-[#002856]",
  },
];

export function Work() {
  return (
    <Section theme="light" id="work">
      <Wrapper type="2xl" extraClasses="text-center">
        <FadeInScroll>
          <Heading text="Selected Work" subText="© Artworking/Golfworking" />
        </FadeInScroll>
        <div className="grid md:grid-cols-4 gap-7 md:gap-10">
          {WORK_DATA.map((work, index) => {
            const lastItem = WORK_DATA.length - 1 === index;
            const centerWidowClasses = lastItem
              ? "md:col-start-2 md:col-end-4"
              : "md:col-span-2";
            return (
              <div
                key={work.title}
                className={`relative rounded-md overflow-hidden md:pb-[100%] lg:pb-[70%] md:h-0 ${centerWidowClasses}`}
              >
                <div className="md:absolute md:top-0 md:left-0 md:w-full md:h-full">
                  <FadeInScroll>
                    <Card
                      extraClasses={work.bgColor}
                      title={work.title}
                      description={work.description}
                      url={work.url}
                      imageSrc={work.imageSrc}
                      placeholderImageSrc={work.placeholderImageSrc}
                    />
                  </FadeInScroll>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </Section>
  );
}
