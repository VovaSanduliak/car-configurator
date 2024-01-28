import "./configurator-options.css";

const ConfiguratorOptions = ({ car, activeOption, setActiveOption }) => {
  const handleOptionClick = (optionName) => {
    setActiveOption(optionName);
  };

  return (
    <nav className="options-panel">
      {car.options.map((optionGroup) => {
        const optionName = Object.keys(optionGroup)[0];

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
      })}
    </nav>
  );
};

export default ConfiguratorOptions;
