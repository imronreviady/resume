import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import LeftMenu from '../LeftMenu';

import Home from '../../pages/Home';
import Works from '../../pages/Works';
import Certificates from '../../pages/Certificates';
import SingleWork from '../../pages/SingleWork';
import CreateWork from '../../pages/CreateWork';
import CreateCertificate from '../../pages/CreateCertificate';
import SingleCertificate from '../../pages/SingleCertificate';

class AppRouter extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Fragment>
						<Route 
							exact
							path="/"
							render={
								props => (
									<Home 
										{...props}
									/>
								)
							} 
						/>
						<Route
							path="/works"
							render={
								props => (
									<Works
										{...props}
									/>
								)
							}
						/>
						<Route
							exact 
							path="/work/:slug" 
							render={
								props => (
									<SingleWork 
										{...props}
									/>
								)
							}
						/>
						<Route
							path="/certificates"
							render={
								props => (
									<Certificates
										{...props}
									/>
								)
							}
						/>
						<Route
							exact 
							path="/certificate/:key" 
							render={
								props => (
									<SingleCertificate 
										{...props}
									/>
								)
							}
						/>
						<Route
							path="/creatework"
							render={
								props => (
									<CreateWork 
										{...props}
									/>
								)
							}
						/>
						<Route
							path="/createcertificate"
							render={
								props => (
									<CreateCertificate 
										{...props}
									/>
								)
							}
						/>
			</Fragment>
		);
	}
}

export default AppRouter;