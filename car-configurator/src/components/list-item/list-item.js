import { Link } from "react-router-dom";
import bmw_image from "./bmw-m8-competition-gran-coupe.png";
import "./list-item.css";

const CarItem = ({
  id,
  title,
  series,
  bodytype,
  entine_type,
  price,
  photo,
}) => {
  return (
    <div className="product-card">
      <Link to={`/configure/${id}`} className="car-link">
        <div className="product-image">
          <img src={photo} alt={`${title}`} />
        </div>
        <div className="product-details">
          <h2 className="product-title">{title}</h2>
          <h4 className="product-price">From {price}</h4>
        </div>
      </Link>
    </div>
  );
};

export default CarItem;
