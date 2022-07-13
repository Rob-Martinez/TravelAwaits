import Navbar from "../../components/navbar/navbar.component";
import Herovid from '../../assets/videos/vid.mp4'
import Button from "../../components/button/button.components";
import { Link } from 'react-router-dom';


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
                    <Link to='#'><Button buttonType='primary' type='button'>Get Started</Button></Link>
                </div>
           </div>
           <div className="container">
                <img src="" alt="" />
                <h3>Title</h3>
                <div>
                    Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Voluptatibus dolore consequuntur a
                    rchitecto error incidunt autem dicta possimus sapiente l
                    aborum eius, impedit, fugiat, excepturi cum molestias se
                    qui obcaecati? Praesentium, aperiam minus.
                </div>
                <Button buttonType='primary' type='button'>Test Button</Button>
           </div>
        </div>
    );
}

export default Home