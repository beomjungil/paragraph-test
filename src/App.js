import React, { Component } from 'react';
import TypoForm from './containers/typoForm';
import TypoParagraph from './containers/typoParagraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TypoForm />
        <TypoParagraph/>
      </div>
    );
  }
}

export default App;
