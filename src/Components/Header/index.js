import React from 'react';
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} />
                    <span>اسکای لانچ</span>
                </Link>
            </nav>
        </header>
    )
}

export default Header