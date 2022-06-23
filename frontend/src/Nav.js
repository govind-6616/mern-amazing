import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    const [isLogin, setLogin] = useState(false);
    const [clogin, setClogin] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            setLogin(true);
        }
        else {
            setLogin(false);
        }

    }, [isLogin]);

    useEffect(() => {
        const ctoken = localStorage.getItem('ctoken');
        console.log(ctoken);
        if (ctoken) {
            setClogin(true);
        }
        else {
            setClogin(false);
        }
    }, [clogin]);

    const RenderMenu = () => {
        if (isLogin) {
            return (
                <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Create/:_id" className="nav-link">Create Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/userHistory" className="nav-link">User History</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/job" className="nav-link">jobs</Link>
                        </li>
                    </ul>

                </>
            )
        }
        else if (clogin) {
            return (
                <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                      
                        <li className="nav-item">
                            <Link to="/CreateJob" className="nav-link">CreateJob</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/job" className="nav-link">jobs</Link>
                        </li>
                    </ul>
                </>
            )
        }
        else {
            return (
                <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/job" className="nav-link">jobs</Link>
                        </li>

                    </ul>
                </>
            )
        }
    }

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">CV Builder</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <RenderMenu />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Nav;