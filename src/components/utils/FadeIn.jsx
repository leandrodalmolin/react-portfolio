import { useEffect, useState } from "react";

export function FadeIn(props) {
  const { delay = 0, children } = props;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, delay)
  }, []);

  return (
    <div className={`opacity-0 duration-[1200ms] ease-in transition-opacity ${isActive ? "opacity-100" : ""}`}>
      {children}
    </div>
  );
}