import FilterSeries from "../filter-series/filter-series";
import FiltersBodyType from "../filters-body-type/filters-body-type";
import FiltersEngineType from "../filters-engine-type/filters-engine-type";
import "./filters.css";

const Filters = ({
  selectedSeries,
  setSelectedSeries,
  selectedBodyTypes,
  setSelectedBodyTypes,
  selectedEngineTypes,
  setSelectedEngineTypes,
}) => {
  return (
    <>
      <FilterSeries
        selectedSeries={selectedSeries}
        setSelectedSeries={setSelectedSeries}
      />
      <FiltersBodyType
        selectedBodyTypes={selectedBodyTypes}
        setSelectedBodyTypes={setSelectedBodyTypes}
      />
      <FiltersEngineType
        selectedEngineTypes={selectedEngineTypes}
        setSelectedEngineTypes={setSelectedEngineTypes}
      />
    </>
  );
};

export default Filters;
