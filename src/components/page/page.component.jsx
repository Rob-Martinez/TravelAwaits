import { Link } from "react-router-dom";
import Button from "../button/button.components";
import Footer from "../footer/footer.component";
import Navbar from "../navbar/navbar.component";
import { useLocation } from "react-router-dom";

import './page.styles.scss';



    const Page = () => {

    const location = useLocation();
    const {place} = location.state;
    console.log(place);

    const { title, description, image, credit, creditLink } = place;
    console.log({title, description});


    

    return (
        <div className="page-container">
            <Navbar />
            <div>
                <div className="image-container">
        
                    <img src={image}
                         alt="" 
                    />
                
                </div>
                
                <div className="page-content">
                    <h2>{title}</h2>
                    <p>{description}
                    <br />
                    Information provided by <a href={creditLink} target='blank'>{credit}</a>
                    </p>

                </div>
                
                <Link to='/'><Button buttonType='primary' type='button'>Back</Button></Link>

            </div>
            <Footer />
        </div>
    );
}

export default Page;