// import logo from "./logo.svg";
// import "./App.css";
import Home from "./components/home";
import Home1 from "./components/Home1";
import LearningState from "./components/LearningState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>My React Learning Journey</h1>
        <hr />
        <Home name="John_0" />
        <hr />
        <Home1 name="John" />
        <hr />
        <LearningState />
      </header>
    </div>
  );
}

export default App;
