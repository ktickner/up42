import CssBaseline from "@mui/material/CssBaseline";

function getBlocks() {
  fetch("https://proxy.cors.sh/https://api.up42.com/marketplace/blocks")
    .then((response) => response.json())
    .then(console.log);
}

function App() {
  getBlocks();

  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
