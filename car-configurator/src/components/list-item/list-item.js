import bmw_image from "./bmw-m8-competition-gran-coupe.png";
import "./list-item.css";

const CarItem = ({
  id,
  model,
  series,
  bodytype,
  entine_type,
  price,
  photo,
}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={photo} alt={`${model} photo`} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{model}</h2>
        <h4 className="product-price">From {price}</h4>
      </div>
    </div>
  );
};

export default CarItem;
