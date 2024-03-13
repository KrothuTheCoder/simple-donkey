import logo from './Untitled.svg';
import './App.css';
import ApiButton from './ApiButton';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="root"></div>
        <p>        
          Inky Pinky Ponky<br/>
          Daddy bought a donkey<br/>
          Donkey died<br/>
          Daddy cried<br/>
          Inky Pinky Ponky<br/>
        </p>
        <ApiButton />
        
      </header>
    </div>
  );
}

export default App;
