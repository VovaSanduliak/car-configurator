import bmw_image from "./bmw-m8-competition-gran-coupe.png";
import "./list-item.css";

function CarItem() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={bmw_image} alt="" />
      </div>
      <div className="product-details">
        <h2 className="product-title">BMW M8</h2>
        <h4 className="product-price"> from 100.000$</h4>
      </div>
    </div>
    // < className="car-item">
    //   <img
    //     className="car-image"
    //     src={bmw}
    //     alt="car"
    //   />
    //   <div className="car-details">
    //     <h3 className="car-title">BMW M8</h3>
    //     <p className="car-description">From 100000$</p>
    //   </div>
  );
}

export default CarItem;
