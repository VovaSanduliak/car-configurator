import { useEffect, useState } from "react";
import Search from "../Search/Search";
import CarItem from "../list-item/list-item";
import { useTranslation } from "react-i18next";
import Modal from "../filters-modal/modal";
import Filters from "../filters/filters";
import "./car-list.css";
import Sidebar from "../sidebar/sidebar";

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
            {cars
              .filter((car) =>
                car.title.toLowerCase().includes(search.toLowerCase())
              )
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
        </div>
      </Sidebar>
    </div>
  );
};

export default CarList;
