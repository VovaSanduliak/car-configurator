import "./configurator-option-values.css";

const ConfiguratorOptionValues = ({
  car,
  activeOption,
  selectedOptions,
  setSelectedOptions,
}) => {
  if (!car) return;

  const handleOptionChange = (optionName, optionValue) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: optionValue,
    }));
  };

  const optionValues = car.options.find(
    (optionGroup) => Object.keys(optionGroup)[0] === activeOption
  )[activeOption];

  return (
    <div className="option-values-panel">
      {optionValues.map((optionValue) => {
        const optionValueName = Object.keys(optionValue)[0];
        const optionValuePrice = optionValue[optionValueName];

        return (
          <img
            key={optionValueName}
            className={
              selectedOptions[activeOption] === optionValueName ? "active" : ""
            }
            onClick={() => handleOptionChange(activeOption, optionValue)}
            src={`/icons/${optionValueName}.png`}
            alt={optionValueName}
          />
        );
      })}
    </div>
  );
};

export default ConfiguratorOptionValues;
