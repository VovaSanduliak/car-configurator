import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./car-configuration.css";

const CarConfiguration = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [activeOption, setActiveOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
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

  const handleOptionClick = (optionName) => {
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
        <li key={optionName}>
          <img
            src={`/icons/${optionName}.png`}
            alt={optionName}
            onClick={() => handleOptionClick(optionName)}
            className={optionName === activeOption ? "active" : ""}
            style={{ width: "5vw" }}
          />
        </li>
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {optionValues.map((value) => (
          <img
            key={value}
            onClick={() => handleOptionChange(activeOption, value)}
            className={selectedOptions[activeOption] === value ? "active" : ""}
            src={`/icons/${value}.png`}
            alt={value}
            style={{ width: "5vw" }}
          />
          // <button
          //   key={value}
          //   onClick={() => handleOptionChange(activeOption, value)}
          //   className={selectedOptions[activeOption] === value ? "active" : ""}
          // >
          //   <img
          //     src={`/icons/${value}.png`}
          //     alt={value}
          //     style={{ width: "5vw" }}
          //   />
          // </button>
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

  const calculatePrice = () => {};

  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "0 auto",
        border: "1px solid #111",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "20%",
          borderRight: "1px solid #222",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <nav style={{ listStyle: "none" }}>{renderOptions()}</nav>
        </div>
        {renderOptionValues()}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          {photoFilename ? (
            <img
              src={`/cars-photo/${car.model}/${photoFilename}.png`}
              alt={car.title}
              style={{ width: "100%" }}
            />
          ) : (
            <div>Photo not found</div>
          )}
        </div>
        <div style={{ textAlign: "right" }}>
          Total Price: {calculatePrice()}
        </div>
      </div>
    </div>
  );
};

export default CarConfiguration;
