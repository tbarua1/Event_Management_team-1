import React from 'react';
import '../../style.css';

const Registration = () => {
    return (
        <div className='breg'>



          <center>


            <h1 id='hreg'>Event Regestration form</h1>
            {/* <div class="weddingregestration"> */}
                <form className='fhreg' id="weddingregestration" method="post">

                    <label>
                        First Name
                    </label>
                    <input type="text" name="fname" id="name" placeholder="Enter your first name" /><br></br>
                    <br></br>

                    <label>
                        Last Name
                    </label>
                    <input type="text" name="lname" id="name" placeholder="Enter your last name" /><br></br>
                    <br></br>


                    <label>
                        Email id
                    </label>
                    <input type="email" name="fname" id="email" placeholder="Enter your email id " /><br></br>
                    <br></br>


                    <label>
                        Ph number
                    </label>
                    <select id="num">
                        <option>+ 91</option>
                        <option>+ 92</option>
                    </select>

                    <input type="number" name="number" id="number" placeholder="Enter your phone number" /><br>
                    </br>
                    <br></br>

                    <label>
                        Id proof
                    </label>
                    <input type="ID proof" name="id" id="name" placeholder="Enter your id proof " /><br></br>
                    <br></br>
                     <br></br>
                    <label>
                        Gender
                    </label>

                    <input type="radio" value="Male" name="gender" checked /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                    <br>
                        </br>
                      <br></br>

                        <div>
                            <label>
                                TYPE OF EVENT
                            </label>

                            <select>
                                <option value="event">Wedding</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Babyshower">Baby-shower</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="Party">party</option>
                                <option value="others">others </option>

                            </select>
                        </div> <br></br> <br></br >

                            <div>
                                <label>
                                    REQUIRED EVENT TYPE
                                </label>

                                <select>
                                    <option value="lawn">Lawn</option>
                                    <option value="normalstage">Nomal Stage</option>


                                </select>
                            </div>
                            <br></br>
                             <br></br>
                            <div>
                                <label>
                                    REQUIRED EVENT  SHIFT
                                </label>

                                <select>
                                    <option value="day">Day event</option>
                                    <option value="night">Night event</option>


                                </select>
                            </div>
                            <br></br>
                            <br></br>
                            <button type="submit" class="registerbtn">Register</button>      
		   
		   </form>
		   
           </center>
		       {/* </div> */}
   
	
        </div>
                );
}

                export default Registration;


