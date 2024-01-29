import { engineTypes } from "../../constants";
import "./filters-engine-type.css";

const FiltersEngineType = ({ selectedEngineTypes, setSelectedEngineTypes }) => {
  const handleEngineTypeChange = (e) => {
    const selectedType = e.target.value;

    if (selectedEngineTypes.includes(selectedType)) {
      setSelectedEngineTypes((prevTypes) =>
        prevTypes.filter((type) => type !== selectedType)
      );
    } else {
      setSelectedEngineTypes((prevTypes) => [...prevTypes, selectedType]);
    }
  };

  return (
    <div className="engine-filter">
      <label className="engine-filter-label">Filter by Engine type:</label>
      {engineTypes.map((type) => (
        <div key={type}>
          <input
            className="engine-filter-input"
            type="checkbox"
            id={`engineType_${type}`}
            value={type}
            checked={selectedEngineTypes.includes(type)}
            onChange={handleEngineTypeChange}
          />
          <label htmlFor={`engineType_${type}`}>{type}</label>
        </div>
      ))}
    </div>
  );
};

export default FiltersEngineType;
