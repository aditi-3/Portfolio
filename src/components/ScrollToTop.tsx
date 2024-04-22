import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import '../css/style.css'

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 660) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="arrow-up-content arrow ai-c arrow-bounce-smaller">
        {showScrollTopButton && (<MdKeyboardDoubleArrowUp className='arrow-up flex ai-c' onClick={scrollTop}/>)}
        {showScrollTopButton && (<li className="arrow-up-text flex" onClick={scrollTop}>Back to top</li>)}
    </div>
  );
};

export default ScrollToTop;