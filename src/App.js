import "./App.css";
import { Home, About, Contact, Portfolio, Resume } from "./containers";

function App() {
  return (
    <div className="App">
      <div id="section1">
        <Home />
      </div>
      <div id="section2">
        <About />
      </div>
      <div id="section3">
        <Portfolio />
      </div>
      <div id="section4">
        <Resume />
      </div>
      <div id="section5">
        <Contact />
      </div>
    </div>
  );
}

export default App;
