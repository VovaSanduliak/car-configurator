import { Link } from "react-router-dom";
import "./home.css";
import photoX5 from "./images/bmw-x5.jpg";

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
    </>
  );
};

export default Home;
