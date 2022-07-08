import Navbar from "../../components/navbar/navbar.component";
import Herovid from '../../assets/videos/video.mp4'


const Home = () => {
    return(
        
        <div className="home-container">
           <Navbar />
           <div className="home-hero-container">
            <img src={Herovid} alt="Beach shore from the air" />
           </div>
        </div>
    );
}

export default Home