import React, {useState} from 'react';
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";

const Header = ({handler, state}) => {

    return (
        <header className={state ? `sidebar-open` : ``}>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} />
                    <span className="me-2">اسکای لانچ</span>
                </Link>
                <button className="navbar-toggler" type="button" onClick={() => handler(state => !state)} data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </header>
    )
}

export default Header