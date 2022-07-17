import Navbar from "../../components/navbar/navbar.component";
import Herovid from '../../assets/videos/vid.mp4'
import Button from "../../components/button/button.components";
import Section from "../../components/section/section.component";
import Footer from "../../components/footer/footer.component";


import './home.styles.scss'


const Home = () => {
    return(
        
        <div className="home-container">
            <Navbar />
            <div className="home-hero-container">
                <video src={Herovid} alt="Beach shore from the air" autoPlay loop muted/>
                <div className="hero-content">
                    <h2>Adventure Awaits</h2>
                    <p>What are you waiting for?</p>
                    <a href="#section"><Button buttonType='primary' type='button'>Get Started</Button></a>
                </div>
            </div>
            <div>
            <Section />
            </div>
            <Footer />
        
           


        </div>
    );
}

export default Home