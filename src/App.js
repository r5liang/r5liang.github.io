import angery_react from './angery_react.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={angery_react} className="App-logo" alt="angery react" />
        <div>
          This is Richard's website.
        </div>
        <div className="App-horiz-layout">
          <a
            className="Profile-link"
            href="https://www.linkedin.com/in/richardrliang/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="Profile-link"
            href="https://www.facebook.com/richard.liang.583/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            className="Profile-link"
            href="https://twitter.com/angery_rliang"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
