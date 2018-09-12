import React, { Component, Fragment } from 'react';

import LeftMenu from './components/LeftMenu';
import AppRouter from './components/AppRouter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div id="fh5co-page">
          
            <LeftMenu />

            <div id="fh5co-main">
              <AppRouter />   
            </div>
        </div>

      </Fragment>
    );
  }
}

export default App;
