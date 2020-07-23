import React, { Component } from 'react';
import Wrapper from './containers/Wrapper/Wrapper'
import {BrowserRouter} from 'react-router-dom'
import Routing from './containers/Routing/Routing'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Routing/>
        </div></BrowserRouter>

    );
  }






}

export default App;
