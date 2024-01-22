import { Link } from "react-router-dom";
//import "./home.css";
import photoX5 from "./images/bmw-x5.jpg";
import photoIX2 from "./images/bmw-ix2.jpg";
import photoX4 from "./images/bmw-x4.jpg";

const Home = () => {
  return (
    <>
      <section style={{ "margin-top": "1em", height: "100vh" }}>
        <div>
          <img
            src={photoX5}
            alt=""
            style={{
              display: "block",
              maxWidth: "50%",
              margin: "0 auto",
              height: "auto",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                margin: "0 auto",
                fontSize: "4vw",
                textTransform: "uppercase",
                fontWeight: "bolder",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              Sheer driving pleasure
            </p>
            <Link
              to="/models"
              style={{
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid black",
                color: "black",
                padding: "0.5em",
                display: "block",
                margin: "1em auto 0 auto",
              }}
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "center",
          margin: "5em auto 0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <h3 style={{ fontSize: "2em", marginBottom: "0.5em" }}>
            The new BMW iX2
          </h3>
          <p style={{ fontSize: "1.2em" }}>
            Combines all-electric driving enjoyment with plenty of space, and a
            striking, modern design.
          </p>
        </div>
        <div style={{ display: "block", width: "50%" }}>
          <img src={photoIX2} alt="BMW iX2" style={{ width: "100%" }} />
        </div>
      </section>

      {/*
      <section className="flex-container">
        <div className="section-image">
          <img className="inverted-image" src={photoX4} alt="" />
        </div>
        <div className="section-text">
          <h3>BMW X4</h3>
          <p>highest performance</p>
        </div>
      </section>
      <section></section> */}
    </>
  );
};

export default Home;
