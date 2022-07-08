import { Link } from "react-router-dom"



const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="nav-bar-logo">
            <Link to='/' className="logo">LOGO</Link> 
            </div>
            <div className="nav-bar-links">
                <div className="navbar-link"><Link to='/about' className="about">About</Link></div>
                <div className="navbar-link"><Link to='/feedback' className="about">Feedback</Link></div> 
            </div>
        </nav>
    );
}

export default Navbar