/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FcSettings } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="nav-logo font-bold" to="/">Unique Todo</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/add-todo" className="nav-link">
                                    Add Todo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/finish-todo" className="nav-link">
                             finish todo
                                </NavLink>
                             </li>
                        </ul>
                        <span className="navbar-text">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink to="/login" className="nav-link">
login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/signup" className="nav-link">
                                        signup
                                </NavLink>
                                  
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">  <FcSettings className='fs-2' /></a>
                                </li>
                            </ul>
                        </span>

                    </div>
                </div>
            </nav>
        </div>);
};

export default Navigation;