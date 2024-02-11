import React from 'react'
import { useEffect } from 'react';


export default function About() {
    useEffect(() => {
        document.title = `About`;
    },[]);

    return (
        <>
            <div id="about" className='mainColor py-5'>
                <div className=" text-light py-5 ">
                    <div className="contentIn text-center">
                        <h4 className="mb-3 fs-1 fw-bolder text-center">ABOUT COMPONENT</h4>
                        <h4 className='fw-bolder'>───────  ★  ───────</h4>
                    </div>
                    <div className="container w-75 pb-5">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-md-6">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
