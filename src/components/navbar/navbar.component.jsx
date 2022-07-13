import { NavLink, Outlet } from "react-router-dom";
import './navbar.styles.scss';



const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="nav-bar-logo">
            <NavLink className="logo" to='/' >LOGO</NavLink> 
            </div>
            <div className="nav-bar-links">
                <div className="navbar-link"><NavLink to='/about' className="about">About</NavLink></div>
                <div className="navbar-link"><NavLink to='/feedback' className="about">Feedback</NavLink></div> 
            </div>
            <Outlet />
        </nav>
    );
}

export default Navbar