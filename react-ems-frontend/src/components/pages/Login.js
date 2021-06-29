import React from 'react';
import './LoginStyle.css';


export default function Login() {
  return (
    <div className="login">
      <form class="box" action="">
        <h1> Login</h1>
        <label htmlFor="username"></label>
        <input type="text" name="username" placeholder="UserName" ></input>
        <label htmlFor="username"></label>
        <input type="password" name="password" placeholder="Password" ></input>
        <input type="submit" name="login button" value="Login"></input>
        <a class="forgot" href="#">forgot password?</a>
        
      </form>
    </div>
  )
}
