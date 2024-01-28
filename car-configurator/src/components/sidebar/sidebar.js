import { useState } from "react";
import "./sidebar.css";
import Filters from "../filters/filters";

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

      <div className={isActive ? "filter-button active" : "filter-button"}>
        <button className="openbtn" onClick={openNav}>
          ☰ Open
        </button>

        {children}
      </div>
    </>
  );
};

export default Sidebar;
