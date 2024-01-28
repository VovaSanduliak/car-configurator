import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import CarItem from "../list-item/list-item";
import Sidebar from "../sidebar/sidebar";
import "./car-list.css";
import { paginationCount } from "../../constants";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);
  const [selectedEngineTypes, setSelectedEngineTypes] = useState([]);
  const [visibleCars, setVisibleCars] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("db/db.json");
        const data = await response.json();
        setCars(data.cars);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredCars = cars
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
    );

  useEffect(() => {
    setVisibleCars(paginationCount);
  }, [search, selectedSeries, selectedBodyTypes, selectedEngineTypes]);

  const handleShowMoreClick = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + paginationCount);
  };

  return (
    <div>
      <Sidebar
        selectedSeries={selectedSeries}
        setSelectedSeries={setSelectedSeries}
        selectedBodyTypes={selectedBodyTypes}
        setSelectedBodyTypes={setSelectedBodyTypes}
        selectedEngineTypes={selectedEngineTypes}
        setSelectedEngineTypes={setSelectedEngineTypes}
      >
        <Search search={search} setSearch={setSearch} />

        <div className="car-list-container">
          <div className="car-list">
            {filteredCars.slice(0, visibleCars).map((car, index) => (
              <CarItem key={index} {...car} />
            ))}
          </div>
        </div>

        {visibleCars < filteredCars.length && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="show-more-btn" onClick={handleShowMoreClick}>
              show more
            </button>
          </div>
        )}
      </Sidebar>
    </div>
  );
};

export default CarList;
