import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import LeftMenu from '../LeftMenu';
import Home from '../Home';
import Work from '../Work';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Fragment>
				<div id="fh5co-page">
					
					<LeftMenu />

					<div id="fh5co-main">
						<Route 
							exact
							path="/"
							component={Home}
						/>
						<Route
							path="/work"
							component={Work}
						/>
					</div>

				</div>
			</Fragment>
		);
	}
}

export default App;