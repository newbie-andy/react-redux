import React, { Component } from 'react';
import InputComponent from './component/InputComponent';
import VisiableTodoList from './containers/VisiableTodoList';
import FooterComponent from './component/FooterComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputComponent />
        <VisiableTodoList />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
