import "./App.css";
import Header from "./Main__Nav";
import { Section__1, Section__2, Section__3, Section__4 } from "./Sections";

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
        <Section__3 />
      </div>
      <div id="section4">
        <Section__4 />
      </div>
    </div>
  );
}

export default App;
