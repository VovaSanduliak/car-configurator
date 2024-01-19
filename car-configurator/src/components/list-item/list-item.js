import bmw_image from "./bmw-m8-competition-gran-coupe.png";
import "./list-item.css";

const CarItem = () => {
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
  );
};

export default CarItem;
