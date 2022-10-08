import { useEffect, useRef, useState } from "react";
import styles from "./FadeInScroll.module.css";

export function FadeInScroll(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  const visibilityClass = isVisible ? styles['is-visible'] : '';

  return (
    <div
      className={`${styles['fade-in-scroll']}  ${visibilityClass}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}