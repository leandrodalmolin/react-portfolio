import { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { CSSTransition } from "react-transition-group";
import { Logo } from "../ui/Logo";
import { Menu } from "../ui/Menu";
import { SideBar } from "./SideBar";
import { LinkScroll } from "../ui/LinkScroll";
import { FadeIn } from "../utils/FadeIn";

import "./NavBar.css";

export function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [visible, setVisible] = useState(true);
  const sidebarRef = useRef(null);

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

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  }

  const lockScroll = () => {
    const body = document.querySelector('body');
    body.classList.add("overflow-hidden");
  }

  const unlockScroll = () => {
    const body = document.querySelector('body');
    body.classList.remove("overflow-hidden");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className={`fixed w-full z-20 transition-[top] duration-700 bg-zinc-900 backdrop-filter backdrop-blur-sm bg-opacity-80 -top-full ${visible ? "top-0" : ""} ${scroll ? "navbar-scroll" : ""}`}>
        <nav className="max-w-7xl mx-auto px-5 py-5 pl-7 md:p-7 md:pl-7 flex items-center justify-between transition-[padding] navbar-scroll:py-2 navbar-scroll:pl-7 navbar-scroll:pr-5 navbar-scroll:md:pr-7">
          <FadeIn delay="1000">
            <LinkScroll to="home" href="#home" onClick={handleCloseSidebar}>
              <Logo extraClasses="transition-[font-size] navbar-scroll:text-[2rem]" />
            </LinkScroll>
          </FadeIn>
          
          <div className="md:hidden">
            <FadeIn delay="1500">
              <Hamburger size={28} distance="sm" toggled={isSidebarOpen} toggle={setIsSidebarOpen} />
            </FadeIn>
          </div>
          
          <div className="hidden md:block">
            <FadeIn delay="1500">
              <Menu className="flex gap-10" />
            </FadeIn>
          </div>
        </nav>
      </div>

      <CSSTransition
        in={isSidebarOpen}
        timeout={400}
        classNames="sidebar"
        unmountOnExit
        onEntered={lockScroll}
        onExited={unlockScroll}
        nodeRef={sidebarRef}
      >
        <SideBar ref={sidebarRef} onCloseSidebar={handleCloseSidebar} />
      </CSSTransition>
    </>
  );
}
