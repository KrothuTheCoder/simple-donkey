import logo from './Untitled.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <div id="root"></div>
          Inky Pinky Ponky<br/>
          Daddy bought a donkey<br/>
          Donkey died<br/>
          Daddy cried<br/>
          Inky Pinky Ponky<br/>
        </p>
        <button id="apiButton">Go</button>
        <div id="resultBox"></div>
        
      </header>
    </div>
  );
}

export default App;
