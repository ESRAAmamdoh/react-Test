import React from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar';


export default function Home() {
    useEffect(() => {
        document.title = `React App`;
    });
    return (
        <>
            <Navbar />
            <div id="home" className='mainColor'>
                <div id="content" className=" py-5 text-light text-center d-flex justify-content-center align-item-center">
                    <div className="contentIn">
                        <img className='my-3' src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" width={250} alt="" />
                        <h4 class="mb-3 fs-1 fw-bolder">START FRAMEWORK</h4>
                        <h4 className='fw-bolder'>───────  ★  ───────</h4>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
        </>
    )
}