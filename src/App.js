import "./App.css";
import { Home, About, Contact, Portfolio, Resume } from "./containers";
import Banner from "./components/Banner/Banner.jsx";

function App() {
  return (
    <div className="main">
      <Banner />
      <div className="App">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
