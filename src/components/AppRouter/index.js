import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import LeftMenu from '../LeftMenu';

import Home from '../../pages/Home';
import Work from '../../pages/Work';
import SingleWork from '../../pages/SingleWork';
import CreateWork from '../../pages/CreateWork';

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
							path="/work"
							render={
								props => (
									<Work 
										{...props}
									/>
								)
							}
						/>
						<Route
							exact 
							path="/detail-work/:key" 
							render={
								props => (
									<SingleWork 
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
			</Fragment>
		);
	}
}

export default AppRouter;