import { Link } from "react-router-dom";
import "./home.css";
import photoX5 from "./images/bmw-x5.jpg";
import photoIX2 from "./images/bmw-ix2.jpg";
import photoX4 from "./images/bmw-x4.jpg";

const Home = () => {
  return (
    <>
      <section className="container">
        <div className="image">
          <img src={photoX5} alt="" />
          <div className="overlay">
            <p>Sheer driving pleasure</p>
            <Link to="/models">Explore</Link>
          </div>
        </div>
      </section>

      <section className="flex-container">
        <div className="section-text">
          <h3>The new BMW iX2</h3>
          <p>
            combines all-electric driving enjoyment with plenty of space, and a striking, modern design.
          </p>
        </div>
        <div className="section-image">
          <img src={photoIX2} alt="" />
        </div>
      </section>

      <section className="flex-container">
        <div className="section-image">
          <img className="inverted-image" src={photoX4} alt="" />
        </div>
        <div className="section-text">
          <h3>
            BMW X4</h3>
          <p>
            highest performance
          </p>
        </div>
      </section>

      <section>
        
      </section>
    </>
  );
};

export default Home;
