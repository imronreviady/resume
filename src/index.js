import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const Main = withRouter(props => ((
	<App 
		{...props}
	/>
)))

ReactDOM.render(
	<BrowserRouter>
		<Main />
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
