import { Link, Outlet } from "react-router-dom";
import './navbar.styles.scss';



const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="nav-bar-logo">
            <Link className="logo" to='/' >LOGO</Link> 
            </div>
            <div className="nav-bar-links">
                <div className="navbar-link"><Link to='/about' className="about">About</Link></div>
                <div className="navbar-link"><Link to='/feedback' className="about">Feedback</Link></div> 
            </div>
            <Outlet />
        </nav>
    );
}

export default Navbar