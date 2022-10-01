import { useEffect, useState } from "react";
import { Link } from "../ui/Link";
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
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#tech">Skill Set</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
