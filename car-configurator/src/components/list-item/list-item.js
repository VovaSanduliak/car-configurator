import { Link } from "react-router-dom";
import "./list-item.css";
import { useTranslation } from "react-i18next";

const CarItem = ({ id, title, engine_type, price, photo }) => {
  const { t } = useTranslation();
  const engineTypes = engine_type
    .map((type) => t(`Engine_types.${type}`))
    .join(" • ");

  return (
    <div className="product-card">
      <Link to={`/configure/${id}`} className="car-link">
        <div className="product-image">
          <img src={photo} alt={`${title}`} />
        </div>
        <div className="product-details">
          <h2 className="product-title">{title}</h2>
          <h4 className="product-price">From {price}</h4>
          <p>{engineTypes}</p>
        </div>
      </Link>
    </div>
  );
};

export default CarItem;
