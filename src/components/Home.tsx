import '../css/style.css'
import '../css/utilities.css'
import { IoIosArrowDown } from "react-icons/io";

const Home = () =>{
    return(
        <section className='home-container flex col'>
            <div className="home-content">
                <p className='arrow'><IoIosArrowDown /></p>
                {/* &#8609; */}
            </div>
        </section>
    );
};
export default Home