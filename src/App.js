import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/forecast";
import Logo from './components/Logo/logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Berk Disli
      </footer>
    </div>
  );
}

export default App;
