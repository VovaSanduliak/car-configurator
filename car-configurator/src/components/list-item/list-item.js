import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18n/";
import "./list-item.css";

const CarItem = ({ id, title, engine_type, price, photo }) => {
  const { t } = useTranslation();
  const engineTypes = engine_type
    .map((type) => t(`Engine_types.${type}`))
    .join(" • ");

  return (
    <Link to={`/configure/${id}`} className="car-link">
      <div className="product-card">
        <img src={photo} alt={`${title}`} />

        <h2 className="product-title">{title}</h2>
        <div className="product-details">
          <p className="product-price">
            {" "}
            {t("From")} {price}
          </p>
          <p>{engineTypes}</p>
        </div>
      </div>
    </Link>
  );
};

export default CarItem;
