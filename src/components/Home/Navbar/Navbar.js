import React from 'react';
import logo from '../../../images/logos/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
                <img style={{height: '60px', marginLeft: '10%'}} src={logo} alt=""/>

            <div className="collapse navbar-collapse m-5" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mr-5 " href="#">Contact Us</a>
                    </li>

                    <button className="btn btn-dark">Login</button>
                
                </ul>
            
            </div>
</nav>
    );
};

export default Navbar;