import Navbar from "../../components/navbar/navbar.component";
import Herovid from '../../assets/videos/vid.mp4'
import Button from "../../components/button/button.components";
import Section from "../../components/section/section.component";
import { Link } from 'react-router-dom';


import './home.styles.scss'
// import '../../components/section/section.styles.scss' // This will need to be moved to container component after testing.


const places = [
    {
        id: 1,
        title: "Centralia, Pennsylvania",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate.'
    },

    // {
    //     id: 2,
    //     title: 'Fort Benning, Georgia',
    //     description: 'lorem asdf daf sadfknl nhiudhfoa whe fnjkdbfjksabf askdfjkabdjkabwofnndvn'
    // },

    // {
    //     id: 3,
    //     title: 'Jacobs Hole, Texas',
    //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate.'
    // },

    // {
    //     id: 4,
    //     title: 'Mount Ranier, Washington',
    //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate.'
    // },

    // {
    //     id: 5,
    //     title: 'Ben & Jerry\'s Flavor Graveyard, Vermont',
    //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate.'
    // },
]


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
            <Section places={places}/>
        
           


        </div>
    );
}

export default Home