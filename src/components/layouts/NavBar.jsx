import { useEffect, useState } from "react";
import { LinkScroll } from "../ui/LinkScroll"; 
import { Logo } from "../ui/Logo";

export function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setScroll(currentScrollPos > 0);

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`fixed w-full z-10 transition-[top] duration-700 bg-zinc-900 backdrop-filter backdrop-blur-sm bg-opacity-80 -top-full ${visible ? "top-0" : ""} ${scroll ? "navbar-scroll" : ""}`}
    >
      <nav className="max-w-7xl mx-auto p-7 flex items-center justify-between transition-[padding] navbar-scroll:py-3">
        <a href="#home">
          <Logo extraClasses="transition-[font-size] navbar-scroll:text-[2rem]" />
        </a>
        <ul className="flex gap-10">
          <li>
            <LinkScroll to="home" href="#home">Home</LinkScroll>
          </li>
          <li>
            <LinkScroll to="work" href="#work">Work</LinkScroll>
          </li>
          <li>
            <LinkScroll to="projects" href="#projects">Projects</LinkScroll>
          </li>
          <li>
            <LinkScroll to="tech" href="#tech">Skill Set</LinkScroll>
          </li>
          <li>
            <LinkScroll to="about" href="#about">About</LinkScroll>
          </li>
        </ul>
      </nav>
    </div>
  );
}
