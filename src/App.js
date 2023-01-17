import './App.css';

import Crypto from './Crypto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg' className="App-logo" alt="logo" />
        <h1>Crypto Rate</h1>
      </header>
      <Crypto />
    </div>
  );
}

export default App;
