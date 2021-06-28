import React, { useState } from 'react';
import '../../style.css';
import axios from 'axios';
import base_url from '../../services/EventService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const [event, setEvent] = useState({});

    const handleForm = (e) => {
        console.log(event);
        postDataToServer(event);
        e.preventDefault();
    };

    const postDataToServer = (data) => {
        axios.post(`${base_url}/event`, data).then(
            (response) => {
                console.log(response);
                console.log("success");

            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        )
    };

    const btnHandle = () => {
        toast('🦄 Event registered successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    return (
        <div className='breg'>

            <div className="container">
                <ToastContainer position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
                <div className="title">Event Booking Form</div>
                <div className="content">
                    <form onSubmit={handleForm}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Type of Event</span>
                                {/* <input type="text" placeholder="Enter Type of Event" required/> */}
                                <select className='opt' onChange={(e) => {
                                    setEvent({ ...event, eventName: e.target.value })
                                }}>
                                    <option value="" disabled selected>Select your option</option>
                                    <option value="wedding">Wedding</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Babyshower">Baby-shower</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="Party">Party</option>
                                    <option value="others">others </option>

                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Number of Guest</span>
                                <input type="text" placeholder="Enter number of guest"
                                    onChange={(e) => {
                                        setEvent({ ...event, noOfGuest: e.target.value })
                                    }} required />
                            </div>
                            <div className="input-box">
                                <span className="details">Date of Event</span>
                                <input type="text" placeholder="Confirm Event date"
                                    onChange={(e) => {
                                        setEvent({ ...event, date: e.target.value })
                                    }} required />
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" value="Veg" name="gender" id="dot-1" onChange={(e) => {
                                setEvent({ ...event, typeOfFood: e.target.value })
                            }} />
                            <input type="radio" name="gender" value="Non-veg" id="dot-2" onChange={(e) => {
                                setEvent({ ...event, typeOfFood: e.target.value })
                            }} />
                            <input type="radio" name="gender" value="Both" id="dot-3" onChange={(e) => {
                                setEvent({ ...event, typeOfFood: e.target.value })
                            }} />
                            <span className="gender-title">Type of Food</span>
                            <div className="category">
                                <label for="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Veg</span>
                                </label>
                                <label for="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Non-Veg</span>
                                </label>
                                <label for="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Both</span>
                                </label>
                            </div>
                        </div>

                        <div className="button">
                            <input type="reset" value="Book" onClick={btnHandle} />
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Registration;

