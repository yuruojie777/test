import logo from './gpt.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-test" alt="logo" />
        <p style={{color: "black"}}>
          VocabAI By Nutpie
        </p>
          <span style={{fontSize: '12px'}}>Version 0.1.2(Build 3)</span>
      </header>
    </div>
  );
}

export default App;
