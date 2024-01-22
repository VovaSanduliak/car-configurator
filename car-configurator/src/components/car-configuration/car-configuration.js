import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import "./car-configuration.css";
import exteriorIcon from "./icons/exterior.png";
import wheelIcon from "./icons/wheel.png";
import interiorIcon from "./icons/interior.png";

import exampleImage from "./bmw-m8-competition-gran-coupe.png";

const CarConfiguration = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db/db.json");
        const data = await response.json();
        const selectedCar = data.cars.find((c) => c.id.toString() === id);
        setCar(selectedCar);
        setSelectedOptions(selectedCar.options);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  const handleOptionChange = (optionName, optionValue) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: optionValue,
    }));
  };

  // TODO: loading
  const renderOptions = () => {
    if (!car || !car.options) {
      return null;
    }

    return car.options.map((optionGroup) => {
      const optionName = Object.keys(optionGroup)[0];
      const optionValues = optionGroup[optionName];

      return (
        <div key={optionName} className="configurator-option">
          <label>{optionName}</label>
          <select
            value={selectedOptions[optionName] || ""}
            onChange={(e) => handleOptionChange(optionName, e.target.value)}
          >
            <option value="">Choose an option</option>
            {optionValues.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      );
    });
  };

  const generatePhotoFilename = (modelName, selectedOptions) => {
    const { exterior, wheels, interior } = selectedOptions;
    // return `${modelName}_${exterior}_${wheels}_${interior}`;
    const ref = `${modelName}-${exterior}-${wheels}`;
    return ref;
  };

  return (
    <div className="configurator">
      <div className="configurator-panel">
        <div className="configurator-nav-panel">
          {renderOptions()}
          {/* <div className="nav-icon">
            <img src={exteriorIcon} />
          </div>
          <div className="nav-icon">
            <img src={wheelIcon} />
          </div>
          <div className="nav-icon">
            <img src={interiorIcon} />
          </div> */}
        </div>
        {/* <div className="configurator-subpanel"></div> */}
      </div>
      <div className="configurator-image">
        {car && (
          <img
            src={`/cars-photo/${car.model}/${generatePhotoFilename(
              car.model,
              selectedOptions
            )}.png`}
            alt={car.title}
          />
        )}
      </div>
    </div>
  );
};

export default CarConfiguration;
