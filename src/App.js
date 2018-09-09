import React, { Component, Fragment } from 'react';

import LeftMenu from './components/LeftMenu';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div id="fh5co-page">
          
            <LeftMenu />

            <div id="fh5co-main">
              <Home />   
            </div>
        </div>

      </Fragment>
    );
  }
}

export default App;
