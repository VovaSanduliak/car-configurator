import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import "./car-configurator.css";
import ConfiguratorOptions from "../configurator-options/configurator-options";
import ConfiguratorOptionValues from "../configurator-option-values/configurator-option-values";
import Modal from "../modal/modal";

// TODO: Create a file for constants
const catalogName = "/cars-photo";
const dbAddress = "/db/db.json";

const CarConfigurator = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const storedOptions = localStorage.getItem(`${id}-selectedOptions`);
    return storedOptions ? JSON.parse(storedOptions) : {};
  });

  const [activeOption, setActiveOption] = useState(null);
  const [photoFilename, setPhotoFilename] = useState(null);
  const [totalSum, setTotalSum] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${dbAddress}`);
        const data = await response.json();
        const selectedCar = data.cars.find((c) => c.id.toString() === id);
        setCar(selectedCar);

        const defaultOptions = {};
        selectedCar.options.forEach((option) => {
          const optionName = Object.keys(option)[0];
          const optionValues = option[optionName];
          const defaulOptionValue = optionValues[0];
          defaultOptions[optionName] = defaulOptionValue;
        });

        setSelectedOptions((prevOptions) => {
          return Object.keys(prevOptions).length > 0
            ? prevOptions
            : defaultOptions;
        });

        setActiveOption(Object.keys(selectedCar.options[0])[0]);
      } catch (error) {
        // TODO: notification
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchPhotoFilename = async () => {
      if (car && selectedOptions) {
        const fileName = await generatePhotoFileName(
          car.model,
          selectedOptions
        );

        setPhotoFilename(fileName);
      }
    };

    const calculateTotalSum = () => {
      let sum = 0;
      sum += parseInt(car?.price);

      Object.keys(selectedOptions).forEach((optionName) => {
        const optionGroup = selectedOptions[optionName];

        Object.keys(optionGroup).forEach((optionValue) => {
          const optionPrice = optionGroup[optionValue];

          sum += optionPrice;
        });
      });

      setTotalSum(sum);
    };

    fetchPhotoFilename();
    calculateTotalSum();
  }, [car, selectedOptions]);

  useEffect(() => {
    localStorage.setItem(
      `${id}-selectedOptions`,
      JSON.stringify(selectedOptions)
    );
  }, [selectedOptions]);

  const generatePhotoFileName = async (modelName, selectedOptions) => {
    const { exterior, wheels } = selectedOptions;
    const ref = `${catalogName}/${modelName}/${modelName}-${
      Object.keys(exterior)[0]
    }-${Object.keys(wheels)[0]}.png`;

    try {
      await fetch(ref);
      return ref;
    } catch (error) {
      console.error(`Image not found: \n${ref}`);
      return null;
    }
  };

  return (
    <div className="configurator">
      <div className="left-panel">
        <div className="options-panel">
          <nav>
            {car && (
              <ConfiguratorOptions
                car={car}
                activeOption={activeOption}
                setActiveOption={setActiveOption}
              />
            )}
          </nav>
        </div>
        {car && (
          <ConfiguratorOptionValues
            car={car}
            activeOption={activeOption}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        )}
      </div>
      <div className="configurator-canvas">
        {photoFilename ? (
          <div>
            <img
              className="configuration-result"
              src={photoFilename}
              alt={car.title}
            />
          </div>
        ) : (
          <div>Loading image...</div>
        )}
        <div className="summary">
          <h3>Selected Options:</h3>
          <ul>
            {Object.keys(selectedOptions).map((optionName) => {
              const optionGroup = selectedOptions[optionName];
              return Object.keys(optionGroup).map((optionValue) => (
                <li key={`${optionName}-${optionValue}`}>
                  {optionName} - {optionValue} - {optionGroup[optionValue]}
                </li>
              ));
            })}
          </ul>
          {!isNaN(totalSum) && <p>Total Price: {totalSum}</p>}
          <button onClick={() => setShowModal(true)}>order now</button>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </div>
  );
};

export default CarConfigurator;
