import React from 'react'


import { Outlet, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';


export default function Navbar() {
    const NavStyle = ({isActive}) =>{
        return{
            fontWeight: isActive? 'bold':'normal',
            color: isActive? '#1abc9c':'#fffff1'
        }
    }

    const [navSize, setnavSize] = useState("7rem");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("7rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <>
            <nav style={{
                height: navSize,
                transition: "all 1s"
            }} className="navbar navbg navbar-expand-lg fixed-top">
                <div className="container-fluid d-flex text-light mx-5 py-3">
                    <Link to="/" className="navbar-brand text-light fs-3 ms-4 fw-bolder" href="#home">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto  mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink style={NavStyle} to="/about" className="px-4 nav-link " aria-current="page" href="#about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={NavStyle} to="/portfolio" className="px-4 nav-link " aria-current="page" href="#portfolio">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={NavStyle} to="/contact" className="px-4 nav-link " href="#contact">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />

        </>
    )
}
