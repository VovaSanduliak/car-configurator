import { useEffect, useState } from "react";
import Search from "../Search/Search";
import CarItem from "../list-item/list-item";
import "./car-list.css";
import { useTranslation } from "react-i18next";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);
  const [selectedEngineTypes, setSelectedEngineTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("db/db.json");
        const data = await response.json();
        setCars(data.cars);
      } catch (error) {
        // TODO: notification component
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSeriesChange = (e) => {
    setSelectedSeries(e.target.value);
  };

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
    <div className="car-list">
      <label htmlFor="seriesFilter">Filter by Series</label>
      <div>
        <select
          id="seriesFilter"
          value={selectedSeries}
          onChange={handleSeriesChange}
        >
          <option value="">All Series</option>
          <option value="1">Series 1</option>
          <option value="2">Series 2</option>
          <option value="3">Series 3</option>
          <option value="4">Series 4</option>
          <option value="5">Series 5</option>
          <option value="6">Series 6</option>
          <option value="7">Series 7</option>
        </select>
      </div>

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

      <Search search={search} setSearch={setSearch} />

      {cars
        .filter((car) => car.title.toLowerCase().includes(search.toLowerCase()))
        .filter((car) => !selectedSeries || car.series === selectedSeries)
        .filter(
          (car) =>
            selectedBodyTypes.length === 0 ||
            selectedBodyTypes.includes(car.bodytype)
        )
        .filter(
          (car) =>
            selectedEngineTypes.length === 0 ||
            selectedEngineTypes.includes(car.engine_type)
        )
        .map((car, index) => (
          <CarItem key={index} {...car} />
        ))}
    </div>
  );
};

export default CarList;
