import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import MainPage from './MainPage';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = React.createClass({
  render() {
    return(
      <MainPage/>
    )
  }
});

export default App;
