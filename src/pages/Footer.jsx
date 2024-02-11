import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube,faTwitter } from "@fortawesome/free-brands-svg-icons"
export default function Footers() {
    return (
        <>
            <footer className="navbg site-footer pt-5">
                <div className="container p-5">
                    <div className="row d-flex align-content-center justify-content-around">
                        <div className="col-md-4 text-center">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p className='mt-1'>Clark, MO 65243</p>

                        </div>
                        <div className="col-md-4 text-center">
                            <h3 className=''>AROUND THE WEB</h3>
                            <div className="social-links">
                                <a className='mx-1 text-light fs-3' href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a className='mx-1 text-light fs-3' href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a className='mx-1 text-light fs-3' href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a className='mx-1 text-light fs-3' href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>


                </div>
                <div className="text-center p-3 bg2">
                    <p>Copyright © Your Website 2021</p>
                </div>
            </footer>

        </>
    )
}
