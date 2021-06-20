import React from 'react';
import '../../App.css';
import logo from './a2.jpeg';
import logo1 from './a1.jpeg';
import logo2 from './a8.jpeg';
import logo3 from './b1.jpeg';
import logo4 from './a4.jpeg';
import logo5 from './a6.jpeg';
import  '../Navbar/styles/Event.css';

export default function Events() {
 return(
<div className="body">
<div className="events">
<h1 >EVENTS</h1> </div>
<div>
  <table className="eventsimg">
	<tr>
	<th><a href=""><img src={logo} height="200" width="380"></img></a></th>
	<th><a href=""><img src={logo1} height="200" width="380"></img></a></th>
	<th><a href=""><img src={logo2} height="200" width="380"></img></a></th>
  </tr>
  <tr>
  <th><h2>Wedding</h2></th>
	<th><h2>Birthday</h2></th>
	<th><h2>Anniversary</h2></th>
	</tr>
  <tr>
	<th><a href=""><img src={logo3} height="200" width="380"></img></a></th>
	<th><a href=""><img src={logo4} height="200" width="380"></img></a></th>
	<th><a href=""><img src={logo5} height="200" width="380"></img></a></th>
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
