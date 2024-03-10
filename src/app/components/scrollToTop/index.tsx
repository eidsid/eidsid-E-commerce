"use client";

import { useEffect, useState } from "react";
import Arrow from "../buttons/Arrow";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 bg-blue-500 text-white  rounded-full ${
        isVisible ? "visible" : "invisible"
      } hover:scale-150 hover:pb-4 hover:scale-y-150 transition-all h-10 w-10 flex items-center justify-center`}
      onClick={scrollToTop}
    >
      <Arrow direction="" />
    </button>
  );
};

export default BackToTopButton;
