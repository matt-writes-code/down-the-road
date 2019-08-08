import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import BG from './components/bg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Down the Road</h1>
      </header>
      <div className="layout">
        <Layout />
      </div>
      <BG />
    </div>
  );
}

export default App;
