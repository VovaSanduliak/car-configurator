import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./car-configuration.css";

const CarConfiguration = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [activeOption, setActiveOption] = useState(null);
  const [photoFilename, setPhotoFilename] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db/db.json");
        const data = await response.json();
        const selectedCar = data.cars.find((c) => c.id.toString() === id);
        setCar(selectedCar);
        setSelectedOptions(selectedCar.options);
        setActiveOption(Object.keys(selectedCar.options[0])[0]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchPhotoFilename = async () => {
      if (car && selectedOptions) {
        const filename = await generatePhotoFilename(
          car.model,
          selectedOptions
        );
        setPhotoFilename(filename);
      }
    };

    fetchPhotoFilename();
  }, [car, selectedOptions]);

  const handleOptionChange = (optionName, optionValue) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: optionValue,
    }));
  };

  const handleIconClick = (optionName) => {
    setActiveOption(optionName);
  };

  const renderOptions = () => {
    if (!car || !car.options || !activeOption) {
      return null;
    }

    return car.options.map((optionGroup) => {
      const optionName = Object.keys(optionGroup)[0];
      const optionValues = optionGroup[optionName];

      return (
        <div key={optionName} className="configurator-option">
          <img
            src={`/icons/${optionName}.png`}
            alt={optionName}
            onClick={() => handleIconClick(optionName)}
            className={optionName === activeOption ? "active" : ""}
          />
        </div>
      );
    });
  };

  const renderOptionValues = () => {
    if (!car || !car.options || !activeOption) {
      return null;
    }

    const optionValues = car.options.find(
      (optionGroup) => Object.keys(optionGroup)[0] === activeOption
    )[activeOption];

    return (
      <div className="configurator-option-buttons">
        {optionValues.map((value) => (
          <button
            key={value}
            onClick={() => handleOptionChange(activeOption, value)}
            className={selectedOptions[activeOption] === value ? "active" : ""}
          >
            {/* {value} */}
            <img src={`/icons/${value}.png`} alt={value} />
          </button>
        ))}
      </div>
    );
  };

  const generatePhotoFilename = async (modelName, selectedOptions) => {
    const { exterior, wheels } = selectedOptions;
    const ref = `${modelName}-${exterior}-${wheels}`;

    try {
      await fetch(`/cars-photo/${modelName}/${ref}.png`);
      return ref;
    } catch (error) {
      console.error(`Image not found: \n${ref}`);
      return null;
    }
  };

  return (
    <div className="configurator">
      <div className="configurator-panel">
        <div className="configurator-nav-panel">{renderOptions()}</div>
        <div className="configurator-option-values">{renderOptionValues()}</div>
      </div>
      <div>
        <div className="configurator-image">
          {photoFilename ? (
            <img
              src={`/cars-photo/${car.model}/${photoFilename}.png`}
              alt={car.title}
            />
          ) : (
            <div>Photo not found</div>
          )}
        </div>
        <div>Total Price:</div>
      </div>
    </div>
  );
};

export default CarConfiguration;
