import Navbar from "../../components/navbar/navbar.component";
import Herovid from '../../assets/videos/vid.mp4'

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
                    <button>Get Started</button>
                </div>
                
            
           </div>
        </div>
    );
}

export default Home