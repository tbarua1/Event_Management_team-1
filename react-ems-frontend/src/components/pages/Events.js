import React from 'react';
import '../../App.css';
import logo from '../../images/a2.jpeg';
import logo1 from '../../images/a1.jpeg';
import logo2 from '../../images/a8.jpeg';
import logo3 from '../../images/b1.jpeg';
import logo4 from '../../images/a4.jpeg';
import logo5 from '../../images/a6.jpeg';
import  '../Navbar/styles/Event.css';
import { Link } from 'react-router-dom';

export default function Events() {
 return(
<div className="body">
<div className="events">
<h1 >EVENTS</h1> </div>
<div>
  <table className="eventsimg">
	<tr>
	<th><Link to='/reg'><img src={logo} ></img></Link></th>
	<th><Link to='/reg'><img src={logo1} ></img></Link></th>
	<th><Link to='/reg'><img src={logo2} ></img></Link></th>
  </tr>
  <tr>
  <th><h2>Wedding</h2></th>
	<th><h2>Birthday</h2></th>
	<th><h2>Anniversary</h2></th>
	</tr>
  <tr>
	<th><Link to='/reg'><img src={logo3} ></img></Link></th>
	<th><Link to='/reg'><img src={logo4} ></img></Link></th>
	<th><Link to='/reg'><img src={logo5} ></img></Link></th>
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
