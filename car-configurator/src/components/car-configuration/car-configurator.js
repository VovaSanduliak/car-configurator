import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConfiguratorOptions from "../configurator-options/configurator-options";
import ConfiguratorOptionValues from "../configurator-option-values/configurator-option-values";
import ConfiguratorSummary from "../configurator-summary/configurator-summaty";
import { catalogName } from "../../constants";
import { dbAddress } from "../../constants";
import "./car-configurator.css";

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
  }, [id, selectedOptions]);

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
        <div className="left-panel-container">
          <div className="options-block">
            {car && (
              <ConfiguratorOptions
                car={car}
                activeOption={activeOption}
                setActiveOption={setActiveOption}
              />
            )}

            <ConfiguratorOptionValues
              car={car}
              activeOption={activeOption}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          </div>

          <ConfiguratorSummary
            selectedOptions={selectedOptions}
            totalSum={totalSum}
          />
        </div>
      </div>
      <div className="configurator-canvas">
        <div className="configurator-canvas-container">
          {photoFilename ? (
            <img
              className="configuration-result"
              src={photoFilename}
              alt={car.title}
              style={{ width: "100%" }}
            />
          ) : (
            <div>Loading image...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarConfigurator;
