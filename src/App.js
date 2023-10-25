import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Home1 from "./components/Home1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My React Learning Journey</p>
        <Home />
        <Home1 />
      </header>
    </div>
  );
}

export default App;
