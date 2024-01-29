import "./loader.css";
import loaderImage from "./loader.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="image-loader"></div>
      <img
        src={loaderImage}
        alt="loader"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Loader;
