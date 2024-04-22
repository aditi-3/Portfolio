import '../css/aboutme.css'
import '../css/utilities.css'
import picture from '../assets/image/aboutme.jpg'

const AboutMe = () => {    
    return (  
      <>
      <section className='about-me-container flex col ai-c'>
        <div className='about-me-content flex ai-c jc-se'>
          <img src={picture} className='about-me-image' alt="Image"></img>
          <div className='about-me-text flex col'>
            <h1 className='about-me-title'>About Me</h1>
            <h1 className='about-me-line'>---------------------------------------</h1>
            <p>
              Hi, the person on the left of that picture is me! 
              My name is Aditi Verma. I am currently a sophmore 
              at San Diego Miramar College majoring in Computer Engineering. 
              Aside from coding, I enjoy spending my freetime 
              drawing, listening to music, and being productive!
            </p>
          </div>
        </div>
      </section>
      <section className='get-know-container'>
        <h1 className = 'get-know-text'>Get To Know Me</h1>
      </section>
      </> 
    );
};
export default AboutMe 