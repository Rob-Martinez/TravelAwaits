import { Outlet } from "react-router-dom";


import './footer.styles.scss';

const Footer = () => {
    return(
        <div className="footer-container">
            <p>Robert Martinez © 2022</p>
            <Outlet />
        </div>
    );
}

export default Footer;