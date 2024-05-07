import React from 'react';
import Luhmann from './components/Luhmann';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Luhmann src={"luhmann.jpeg"} alt="Descriptive text for the image" />
      </header>
    </div>
  );
}

export default App;
