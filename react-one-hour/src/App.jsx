import React from 'react';
import './App.css';
import Header from './component/layout/header.jsx';
// import { extends } from './.eslintrc';
import Content from './component/layout/content.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
