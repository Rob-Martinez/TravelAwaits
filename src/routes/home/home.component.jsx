import Navbar from "../../components/navbar/navbar.component";
import Herovid from '../../assets/videos/vid.mp4'
import Button from "../../components/button/button.components";
import { Link } from 'react-router-dom';


import './home.styles.scss'
import '../../components/container/container.styles.scss' // This will need to be moved to container component after testing.


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

           <section className="section">
                <div className="container">
                    <div className="info column">
                        <h2 className="title ">Balloon Festival, India</h2>
                        <div className="description">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Voluptatibus dolore consequuntur a
                                rchitecto error incidunt autem dicta possimus sapiente l
                                aborum eius, impedit, fugiat, excepturi cum molestias se
                                qui obcaecati? Praesentium, aperiam minus.
                            </p>
                        </div>
                        <div className="button-div">
                            <Button buttonType='primary' type='button'>Test Button</Button>
                        </div>
                    </div>
                        <img className='column' src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
           </section>
        </div>
    );
}

export default Home