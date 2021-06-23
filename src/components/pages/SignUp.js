import React from 'react';
import '../../App.css';
import '../../SignUpStyle.css'

export default function SignUp() {
  return(
    <React.Fragment>

    <form action="">
      <div id="login-box">
        <div class="left-box">
          <h1> Register</h1>
         <label htmlFor="username">Username </label>
        <input type="text" name="username" placeholder="Name" ></input>
        <label htmlFor="email">Email </label>
        <input type="text" name="email" placeholder="Email" ></input>
        <label htmlFor="Password">Password </label>
        <input type="text" name="username" placeholder="Password" ></input>
        <label htmlFor="Password">Password </label>
        <input type="text" name="username" placeholder="Confirm Password" ></input>
        <input type="submit" name="signup button" value="Submit"></input>
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
</React.Fragment>
    
    

);  }







