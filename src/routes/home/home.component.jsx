import Navbar from "../../components/navbar/navbar.component";
import Herovid from '../../assets/videos/vid.mp4'
import Button from "../../components/button/button.components";
import Section from "../../components/section/section.component";
import Footer from "../../components/footer/footer.component";
import { Link } from 'react-router-dom';


import './home.styles.scss'
// import '../../components/section/section.styles.scss' // This will need to be moved to container component after testing.




const Home = () => {
    return(
        
        <div className="home-container">
            <Navbar />
            <div className="home-hero-container">
                <video src={Herovid} alt="Beach shore from the air" autoPlay loop muted/>
                <div className="hero-content">
                    <h2>Adventure Awaits</h2>
                    <p>What are you waiting for?</p>
                    <Link to='#'><Button buttonType='primary' type='button'>Get Started</Button></Link>
                </div>
            </div>
            <Section/>
            <Footer />
        
           


        </div>
    );
}

export default Home