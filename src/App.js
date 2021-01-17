import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          This is Richard's website.
        </div>
        <div>
          <a
            className="Profile-link"
            href="https://www.linkedin.com/in/richardrliang/"
            target="_blank"
          >
            LinkedIn
          </a> <a
            className="Profile-link"
            href="https://www.facebook.com/richard.liang.583/"
            target="_blank"
          >
            Facebook
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
