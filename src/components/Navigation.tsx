import '../css/navigation.css'
import '../css/style.css'
import '../css/utilities.css'
import {useRef} from "react"
import AboutMe from './AboutMe.tsx';
// import Home from './Home';
import Contact from './Contact.tsx'
import Projects from './Projects.tsx'
import ScrollToTop from './ScrollToTop.tsx';
import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => 
{  
    // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //   e.preventDefault() //prevent the default behavior
    //   const href = e.currentTarget.href //get hred and remove everything before #
    //   const targetId = href.replace(/.*\#/, "")
    //   const elem = document.getElementById(targetId)
    //   elem?.scrollIntoView({behavior: "smooth"});
    // };

    const home = useRef(null);
    const aboutme = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef: any) => 
    {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
  };

  return (
    <>
    <header className="sticky-nav">
      <ScrollToTop />
    <section className = 'nav-container'>
    <li className="scroll" onClick={() => scrollToSection(home)}>Logo</li>
      <nav className = "navigation">
        <li className="scroll" onClick={() => scrollToSection(aboutme)}>About Me</li>
        <li className="scroll" onClick={() => scrollToSection(projects)}>Projects</li>
        <li className="scroll" onClick={() => scrollToSection(contact)}>Contact</li>
      </nav>
    </section>
    </header>
    <section className='home-container flex'>
      <div className="home-content">
        <div className='typewriter'><h1>Welcome...</h1></div>
        <li className="arrow arrow-bounce" onClick={() => scrollToSection(aboutme)}><IoIosArrowDown /></li>          
      </div>
    </section>
    {/* <section ref={home}><Home /></section> */}
    <section ref={aboutme}><AboutMe /></section>
    <section ref={projects}><Projects /></section>
    <section ref={contact}><Contact /></section>
    </>
  );
};
export default Navigation 