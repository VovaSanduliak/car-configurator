import { useState } from "react";
import Filters from "../filters/filters";
import "./sidebar.css";

const Sidebar = ({
  selectedSeries,
  setSelectedSeries,
  selectedBodyTypes,
  setSelectedBodyTypes,
  selectedEngineTypes,
  setSelectedEngineTypes,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  const openNav = () => {
    setIsActive(true);
  };

  const closeNav = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className={isActive ? "sidebar active" : "sidebar"}>
        <a className="closebtn" onClick={closeNav}>
          ×
        </a>

        <Filters
          selectedSeries={selectedSeries}
          setSelectedSeries={setSelectedSeries}
          selectedBodyTypes={selectedBodyTypes}
          setSelectedBodyTypes={setSelectedBodyTypes}
          selectedEngineTypes={selectedEngineTypes}
          setSelectedEngineTypes={setSelectedEngineTypes}
        />
      </div>

      <button className="openbtn" onClick={openNav}>
        ☰ Filters
      </button>
      <div className={isActive ? "filter-button active" : "filter-button"}>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
