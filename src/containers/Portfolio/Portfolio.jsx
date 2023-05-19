import React from "react";
import "./portfolio.css";
import login from "../../assets/login.png";
import spark from "../../assets/spark.png";
import gpt3 from "../../assets/gpt3.png";

function Portfolio() {
  return (
    <div className="portfolio_main">
      <h2 className="project__title">02. Portfolio</h2>
      <div className="project_categories">
        <input type="radio" id="all" name="color" />
        <label for="all">#️⃣All Projects</label>

        <input type="radio" id="web" name="color" />
        <label for="web">#️⃣Web Development</label>

        <input type="radio" id="data" name="color" />
        <label for="data">#️⃣Data Analysis & Visualization</label>

        <input type="radio" id="other" name="color" />
        <label for="other">#️⃣UX Design</label>

        <input type="radio" id="other" name="color" />
        <label for="other">#️⃣Artifical Intelligence</label>

        <input type="radio" id="other" name="color" />
        <label for="other">#️⃣Algorithmic Trading</label>

        <input type="radio" id="other" name="color" />
        <label for="other">#️⃣Other Projects</label>
      </div>
      <hr className="category__divider" />
      <div className="subcatagory__container">
        <input type="radio" id="all" name="color" />
        <label for="all">#️⃣Javascript</label>

        <input type="radio" id="web" name="color" />
        <label for="web">#️⃣Java</label>

        <input type="radio" id="data" name="color" />
        <label for="data">#️⃣C++</label>

        <input type="radio" id="other" name="color" />
        <label for="other">#️⃣Python</label>

        <input type="radio" id="other" name="color" />
        <label for="other">#️⃣Html/CSS</label>

        <input type="radio" id="other" name="color" />
        <label for="other">#️⃣React Development</label>

        <input type="radio" id="other" name="color" />
        <label for="other">#️⃣Netbeans Development</label>

        <input type="radio" id="other" name="color" />
        <label for="other">#️⃣API Development</label>
      </div>
      <div className="card__container">
        <div className="card web">
          <img src={login}></img>
        </div>
        <div className="card web">
          <img src={spark}></img>
        </div>
        <div className="card web">
          <img src={gpt3}></img>
        </div>
        <div className="card data">
          <img src={spark}></img>
        </div>
        <div className="card data">
          <img src={gpt3}></img>
        </div>
        <div className="card data">
          <img src={login}></img>
        </div>
        <div className="card other">
          <img src={gpt3}></img>
        </div>
        <div className="card other">
          <img src={login}></img>
        </div>
        <div className="card other">
          <img src={spark}></img>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
