import { Card } from "../ui/Card";

import rlImage from "../../assets/images/work/rl-work.jpg";
import sdImage from "../../assets/images/work/sd-work.jpg";
import gwImage from "../../assets/images/work/gw-work.jpg";
import cgImage from "../../assets/images/work/cf-work.jpg";
import spcImage from "../../assets/images/work/spc-work.jpg";
import { Wrapper } from "../abstracts/Wrapper";
import { Section } from "../abstracts/Section";
import { Heading } from "../ui/Heading";

const WORK_DATA = [
  {
    title: "GolfWorking",
    description:
      "GolfWorking specialise in building websites for golf clubs, with clients throughout UK and Ireland.",
    url: "https://www.golfworking.co.uk/",
    imageSrc: gwImage,
    bgColor: "bg-[#222]",
  },
  {
    title: "Royal Lytham & St Annes Golf Club",
    description:
      "One of the premier links courses in the World, host to eleven Open Championships, two Ryder Cups and numerous other major tournaments.",
    url: "https://www.royallytham.org/",
    imageSrc: rlImage,
    bgColor: "bg-[#111b36]",
  },
  {
    title: "Royal St. David's Golf Club",
    description:
      "Established in 1894, the Harlech links has long been ranked within the ‘Top Fifty’ of British golf courses, and most recently ranked 2nd in the Top 50 Courses in Wales by Golf World.",
    url: "https://www.royalstdavids.co.uk/",
    imageSrc: sdImage,
    bgColor: "bg-[#2f3543]",
  },
  {
    title: "Congo Falls",
    description:
      "Congo Falls Adventure Golf is a spectacular outdoor mini golf course suitable for adults of all ages and families.",
    url: "https://www.congofalls.co.uk/",
    imageSrc: cgImage,
    bgColor: "bg-[#29452A]",
  },
  {
    title: "SPC Group",
    description:
      "Leading global manufacturer of rubber compounds, specialise in technically demanding high quality materials used in seals, gaskets, hoses and more.",
    url: "https://www.spc-group.com/",
    imageSrc: spcImage,
    bgColor: "bg-[#002856]",
  },
];

export function Work() {
  return (
    <Section theme="light" id="work">
      <Wrapper type="xl" extraClasses="text-center">
        <Heading text="Selected Work" subText="© Artworking/Golfworking" />
        <div className="grid md:grid-cols-4 gap-5 md:gap-10">
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
                  <Card
                    extraClasses={work.bgColor}
                    title={work.title}
                    description={work.description}
                    url={work.url}
                    imageSrc={work.imageSrc}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </Section>
  );
}
