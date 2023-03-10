/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FcSettings } from 'react-icons/fc';

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Todo </a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Add Todo </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Finish Todo </a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Log in  /</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">sign up </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">  <FcSettings className='fs-1' /> Settings</a>
                                </li>
                            </ul>
                        </span>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;