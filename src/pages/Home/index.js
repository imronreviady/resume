import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

class Home extends Component {

	render() {
		return (
			<Fragment>
				<Helmet>
					
					<meta property="og:title" content="Imron Reviady - Web & Mobile Developer"/>
					<meta property="og:image" content=""/>
					<meta property="og:url" content=""/>
					<meta property="og:site_name" content=""/>
					<meta property="og:description" content=""/>
					<meta name="twitter:title" content="Imron Reviady - Web & Mobile Developer" />
					<meta name="twitter:image" content="" />
					<meta name="twitter:url" content="" />
					<meta name="twitter:card" content="" />

                	<title>Imron Reviady - Web & Mobile Developer</title>
            	</Helmet>
				<div className="fh5co-narrow-content">
					<div className="row">
						<div className="col-md-5">
							<h2 className="fh5co-heading animate-box fadeInLeft animated">I Create Web And Mobile Apps</h2>
							<p className="fh5co-lead animate-box fadeInLeft animated">I am <a>Imron Reviady</a> a <a>Web And Mobile Apps Developer</a> From Depok, Indonesia.</p>
						</div>
						<div className="col-md-6 col-md-push-1 animate-box fadeInLeft animated">
							<img src="assets/images/img_1.jpg" alt="Free HTML5 Bootstrap Template" className="img-responsive" /> 
						</div>
					</div>
					
				</div>
			</Fragment>
		);
	}
}

export default Home;