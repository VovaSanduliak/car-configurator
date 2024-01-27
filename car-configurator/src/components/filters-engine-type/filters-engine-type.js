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
    <div>
      <label>Filter by Engine type:</label>
      {["petrol", "diesel", "electric", "plug_in_hybrid"].map((type) => (
        <div key={type}>
          <input
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
