import React from 'react';
import '../../App.css';
import logo from '../../images/a2.jpeg';
import logo1 from '../../images/a1.jpeg';
import logo2 from '../../images/a8.jpeg';
import logo3 from '../../images/b1.jpeg';
import logo4 from '../../images/a4.jpeg';
import logo5 from '../../images/a6.jpeg';
import  '../Navbar/styles/Event.css';

export default function Events() {
 return(
<div className="body">
<div className="events">
<h1 >EVENTS</h1> </div>
<div>
  <table className="eventsimg">
	<tr>
	<th><a href=""><img src={logo} ></img></a></th>
	<th><a href=""><img src={logo1} ></img></a></th>
	<th><a href=""><img src={logo2} ></img></a></th>
  </tr>
  <tr>
  <th><h2>Wedding</h2></th>
	<th><h2>Birthday</h2></th>
	<th><h2>Anniversary</h2></th>
	</tr>
  <tr>
	<th><a href=""><img src={logo3} ></img></a></th>
	<th><a href=""><img src={logo4} ></img></a></th>
	<th><a href=""><img src={logo5} ></img></a></th>
  </tr>
  <tr>
  <th><h2>Baby Shower</h2></th>
	<th><h2>Party</h2></th>
	<th><h2>Other Events</h2></th>
	</tr>
  </table>

</div>
	</div>
	);
}
