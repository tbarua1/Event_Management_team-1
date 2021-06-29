import React, { useState } from 'react';
import '../../App.css';
import '../../SignUpStyle.css'
import axios from 'axios';
import base_url from '../../services/EventService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {

  const [user, setUser] = useState({});

  const handleForm = (e) => {
    console.log(user);
    postDataToServer(user);
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios.post(`${base_url}/user`, data).then(
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
    toast('🦄 Registered successfully!', {
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
    <div className="rsign">
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <form onSubmit={handleForm}>
        <div id="login-box">
          <div class="left-box">
            <h1 class="heading"> Register</h1>
            <label htmlFor="username">Username </label>
            <input className="input" type="text" name="username" placeholder="Name" onChange={(e) => {
              setUser({ ...user, uName: e.target.value })
            }}></input>
            <label htmlFor="email">Email </label>
            <input className="input" type="text" name="email" placeholder="Email" onChange={(e) => {
              setUser({ ...user, uEmail: e.target.value })
            }}></input>
            <label htmlFor="Password">Password </label>
            <input className="input" type="password" name="pass" placeholder="Password" onChange={(e) => {
              setUser({ ...user, uPass: e.target.value })
            }}></input>
            <label htmlFor="Password">Password </label>
            <input className="input" type="password" name="pass2" placeholder="Confirm Password" ></input>
            <input type="submit" name="signup button" value="Submit" onClick={btnHandle} ></input>
          </div>
          <div class="right-box">
            <span class="signinwith"></span>
            <button class="social facebook">Login with facebook</button>
            <button class="social twitter">Login with twitter</button>
            <button class="social google">Login with google</button>
          </div>
          <div class="or">
            <p class="o">OR</p>
          </div>
        </div>
      </form>
    </div>



  );
}
