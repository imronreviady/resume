import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
	return (
		<Fragment>
			<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i /></a>
			<aside id="fh5co-aside" role="complementary" className="border js-fullheight">
				<h1 id="fh5co-logo"><a href="index.html"><img src="https://avatars0.githubusercontent.com/u/19647405?s=112&v=4" style={{borderRadius: '50%'}} alt="Free HTML5 Bootstrap Website Template" /></a></h1>
				<nav id="fh5co-main-menu" role="navigation">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/work">Portfolio</Link></li>
						<li><Link to="/creatework">Add Work</Link></li>
						<li><a href="about.html">About</a></li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</nav>
				<div className="fh5co-footer">
					<ul>
						<li><a href="#"><i className="icon-facebook" /></a></li>
						<li><a href="#"><i className="icon-twitter" /></a></li>
						<li><a href="#"><i className="icon-instagram" /></a></li>
						<li><a href="#"><i className="icon-linkedin" /></a></li>
					</ul>
				</div>
			</aside>
		</Fragment>
	);
};

export default LeftMenu;