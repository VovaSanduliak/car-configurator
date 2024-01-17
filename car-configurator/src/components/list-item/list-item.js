import bmw from "./bmw-m8-competition-gran-coupe.png"

function CarItem() {
  return (
    <div className="car-item">
      <img
        className="car-image"
        src={bmw}
        alt="car"
      />
      <div className="car-details">
        <h3 className="car-title">BMW M8</h3>
        <p className="car-description">From 100000$</p>
      </div>
    </div>
  );
}

export default CarItem;