import '../css/contact.css'
import '../css/utilities.css'
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { TfiEmail } from "react-icons/tfi";

const Contact = () => {    
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    // emailjs.sendForm('service_e8l833r', 'template_ej7bsol', 'QjAyKgiKa4BRdSvRs') //, form.current
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };
    return (
      <>
      <section className='contact-container'>
      <div className = "contact-content flex">
        <div className='email-container'>
        <form ref={form} onSubmit={sendEmail}>
            <div className="group">
                <input type="text" name="user_name"  required = {true} />
                <label>Name</label>
                <span className="highlight"></span>
                <span className="bar"></span>
            </div>
            <div className="group">
                <input type="email" name="user_email" required = {true} />
                <label>Email</label>
                <span className="highlight"></span>
                <span className="bar"></span>
            </div>
            <div className="group">
                <textarea name="user_message" required = {true} />
                <label>Message</label>
                <span className="highlight"></span>
                <span className="bar"></span>
            </div>
            <button className="submit-btn">submit</button>
        </form>
        </div>  
      </div>
      <div className='contact-title flex ai-c col'>
          <h1>Contact</h1>
          <hr></hr>
          <h2>Get in touch!</h2>
      </div>
      </section> 
      {/* <div><Contact2 /></div>  */}

      </>
    );
};
export default Contact