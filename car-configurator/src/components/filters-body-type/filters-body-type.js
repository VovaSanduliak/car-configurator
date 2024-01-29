import { bodyTypes } from "../../constants";
import "./filters-body-type.css";

const FiltersBodyType = ({ selectedBodyTypes, setSelectedBodyTypes }) => {
  const handleBodyTypeChange = (e) => {
    const selectedType = e.target.value;

    if (selectedBodyTypes.includes(selectedType)) {
      setSelectedBodyTypes((prevTypes) =>
        prevTypes.filter((type) => type !== selectedType)
      );
    } else {
      setSelectedBodyTypes((prevTypes) => [...prevTypes, selectedType]);
    }
  };

  return (
    <div className="bodytype-filter">
      <label className="bodytype-filter-label" htmlFor="bodyTypeFilter">
        Filter by body type
      </label>
      {bodyTypes.map((type) => (
        <div className="bodytype-filter-checkbox" key={type}>
          <input
            className="bodytype-filter-input"
            type="checkbox"
            id={type}
            value={type}
            checked={selectedBodyTypes.includes(type)}
            onChange={handleBodyTypeChange}
          />
          <label htmlFor={type}>{type}</label>
        </div>
      ))}
    </div>
  );
};

export default FiltersBodyType;
