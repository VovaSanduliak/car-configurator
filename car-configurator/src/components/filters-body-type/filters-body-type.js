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
    <div>
      <label htmlFor="bodyTypeFilter">Filter by body type</label>
      {[
        "saloon",
        "touring",
        "convertible",
        "coupe",
        "tourer",
        "bmw i",
        "gran coupe",
      ].map((type) => (
        <div key={type}>
          <input
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
