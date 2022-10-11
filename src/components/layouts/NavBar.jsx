import { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { CSSTransition } from "react-transition-group";
import { Logo } from "../ui/Logo";
import { Menu } from "../ui/Menu";
import { SideBar } from "./SideBar";
import { LinkScroll } from "../ui/LinkScroll";
import { FadeIn } from "../utils/FadeIn";

import "./NavBar.css";
import { Wrapper } from "../abstracts/Wrapper";

export function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const sidebarRef = useRef(null);

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

  const handleScroll = () => {
    const threshold = 300;
    setIsScrolling(window.scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className={`fixed top-0 w-full z-20 duration-700 ${isSidebarOpen ? "p-2" : "bg-zinc-900 backdrop-filter backdrop-blur-sm bg-opacity-80"}  ${isScrolling ? "navbar-scroll" : ""}`}>
        <Wrapper type="2xl">
          <nav className="flex items-center justify-between py-5 md:py-7 duration-700 transition-[padding] navbar-scroll:py-1 navbar-scroll:sm:py-2">
            <FadeIn delay="1000">
              <LinkScroll to="home" href="#home" onClick={handleCloseSidebar}>
                <Logo extraClasses="duration-700 transition-[font-size] navbar-scroll:text-[1.8rem]" />
              </LinkScroll>
            </FadeIn>
            
            <div className="md:hidden -mr-2">
              <FadeIn delay="1500">
                <Hamburger color="#d4d4d8" size={28} distance="sm" toggled={isSidebarOpen} toggle={setIsSidebarOpen} />
              </FadeIn>
            </div>
            
            <div className="hidden md:block">
              <FadeIn delay="1500">
                <Menu className="flex gap-10" />
              </FadeIn>
            </div>
          </nav>
        </Wrapper>
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
