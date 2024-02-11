import React from 'react'
import { useEffect } from 'react';


export default function Contact() {
    useEffect(() => {
        document.title = `Contact`;
    });
    return (
        <>
            <div id='contact' className=" mainColor py-5 ">
                <div className="w-50 box p-5 m-auto">
                <h1 className="text-center text-light">CONATCT SECTION</h1>
                <h4 className='fw-bolder text-center text-light'>─────  ★  ─────</h4>

                <input id="name" type="text" className="form-control my-3" placeholder="Enter name" />
                <input id="email" type="email" className="form-control my-3" placeholder="Enter email" />
                <input id="password" type="password" className="form-control my-3" placeholder="Enter password" />
                <input id="repassword" type="password" className="form-control my-3" placeholder="Enter password" />
                <input id="phone" type="text" className="form-control my-3" placeholder="Enter phone" />
                <button id="btn" className="btn btn-outline-dark pink ">Enter</button>
                </div>
            </div>


        </>
    )
}