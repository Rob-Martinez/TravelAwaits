import { Link } from "react-router-dom";
import Button from "../button/button.components";
import Footer from "../footer/footer.component";
import Navbar from "../navbar/navbar.component";

import './page.styles.scss';


const PageContent = [
    {
        Centralia: {
            title: "Centralia",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias iusto",
        },

        FortBenning: {
            title: "Fort Benning, GA",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias iusto sdfs",
        },

        JacobsHole: {
            title: "Jacobs Hole, TX",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias ",
        },

        MountRainer: {
            title: "Mount Rainer, WA",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias iusto sdfssdf sd",
        }
    }
]



const Page = () => {
    return(
        <div className="page-container">
            <Navbar />
            <div>
                <div className="image-container">
        
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/OHKE7SRWTFEODETIVYH5KTZ5CA.jpg"
                         alt="" 
                    />
                
                </div>
                
                <div className="page-content">
                    <h2>Centralia, PA</h2>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Tenetur molestias iusto 
                        laborum totam sit et deleniti explicabo ipsa 
                        harum itaque perspiciatis ipsum volupta
                        adipisci, dignissimos tempore impedit iste
                        eaque? Officia laudantium soluta minus ad
                        ea placeat cumque ratione culpa inventore
                        numquam mollitia nam, obcaecati saepe? A
                        met aliquam, aspernatur necessitatibus nu
                        mquam quaerat reprehenderit minima, dicta 
                        corrupti expedita ut eligendi. Delectus te
                        mpora veritatis ab, nesciunt quod culpa no
                        n obcaecati enim neque earum error asperi
                        res nihil, velit hic reiciendis reprehend
                        erit est vel sapiente porro quae illo mag
                        nam natus. Cumque commodi veritatis accusamus 
                        quia doloribus labore iusto, doloremque ex inc
                        idunt officia at id praesentium aspernatur imp
                        edit facilis, ea consequuntur, assumenda voluptas
                        vitae! Deleniti praesentium ipsam et rerum magnam
                        illo, temporibus beatae, eveniet molestias debitis
                        ipsum officia eos veniam! Voluptates adipisci eum qu
                        i nesciunt expedita.
                    </p>
                </div>
                
                <Link to='/'><Button buttonType='primary' type='button'>Back</Button></Link>

            </div>
            <Footer />
        </div>
    );
}

export default Page;