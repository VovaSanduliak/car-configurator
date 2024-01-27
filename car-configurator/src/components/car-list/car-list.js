import { useEffect, useState } from "react";
import Search from "../Search/Search";
import CarItem from "../list-item/list-item";
import "./car-list.css";
import { useTranslation } from "react-i18next";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

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
    <div className="car-list">
      <Search search={search} setSearch={setSearch} />
      {cars
        .filter((car) => car.title.toLowerCase().includes(search.toLowerCase()))
        .map((car, index) => (
          <CarItem key={index} {...car} />
        ))}
    </div>
  );
};

export default CarList;
