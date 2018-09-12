import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter, withRouter } from 'react-router-dom';

import App from './App';
import store from './store';
import { routerHistory } from './store'

import registerServiceWorker from './registerServiceWorker';

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppWithRouter />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
