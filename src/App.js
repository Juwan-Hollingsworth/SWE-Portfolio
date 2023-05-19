import "./App.css";
import Header from "./Main__Nav";
import { Section__1, Section__2 } from "./Sections";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="section1">
        <Section__1 />
      </div>
      <div id="section2">
        <Section__2 />
      </div>
      <div id="section3">
        <h1>Section 3</h1>
      </div>
      <div id="section4">
        <h1>Section 4</h1>
      </div>
    </div>
  );
}

export default App;
