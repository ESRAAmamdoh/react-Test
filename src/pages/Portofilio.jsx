import React from 'react'
import {faPlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Portfolio() {

    const listenScrollEvent = () => {
        let boxContainer = document.getElementById("boxContainer");
        let imgs = Array.from(document.querySelectorAll(".container2 img"));
        let itemBox = document.getElementById("itemBox");

        for (var i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener("click", function (e) {
                itemBox.style.backgroundImage = `url(${e.target.src})`;
                boxContainer.style.display = "flex";
                console.log(e.target.src);
            });
        }
    };



    useEffect(() => {
        document.title = `Portfolio`;
        listenScrollEvent()
    });
    return (
        <>

            <div id="portfolio" className='mainColor py-5'>
                <div id="content2" className=" py-3 text-light text-center">
                    <div className="contentIn text-bg py-3">
                        <h2 className='fw-bolder text-light'>PORTFOLIO COMPONENT</h2>
                        <h4 className='fw-bolder text-light'>───────  ★  ───────</h4>
                    </div>
                    <div className="gallery">
                        <div className="container">
                            <div className="row mx-5 px-3">
                                <div className="col-sm-6 col-md-4 mb-3">
                                    <div className="container2 text-center">
                                        <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className=" w-100 image-30" />
                                        <div className="middle">
                                       
                                            <div className="text-30 text-center fw-bolder i"><FontAwesomeIcon icon={faPlus} /></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 mb-3">
                                    <div className="container2 text-center">
                                        <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className=" image-30" />
                                        <div className="middle">
                                            <div className="text-30 text-center fw-bolder i"><FontAwesomeIcon icon={faPlus} /></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 mb-3">
                                    <div className="container2 text-center">
                                        <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className=" image-30" />
                                        <div className="middle">
                                            <div className="text-30 text-center fw-bolder i"><FontAwesomeIcon icon={faPlus} /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 mb-3">
                                    <div className="container2 text-center">
                                        <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className=" image-30" />
                                        <div className="middle">
                                            <div className="text-30 text-center fw-bolder i"><FontAwesomeIcon icon={faPlus} /></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 mb-3">
                                    <div className="container2 text-center">
                                        <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className=" image-30" />
                                        <div className="middle">
                                            <div className="text-30 text-center fw-bolder i"><FontAwesomeIcon icon={faPlus} /></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 mb-3">
                                    <div className="container2 text-center">
                                        <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className=" image-30" />
                                        <div className="middle">
                                            <div className="text-30 text-center fw-bolder i"><FontAwesomeIcon icon={faPlus} /></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={(e) => e.target.style.display = "none"} id="boxContainer">
                    <div id="itemBox">
                     
                    </div>
                </div>
            </div>

        </>

    )

}

