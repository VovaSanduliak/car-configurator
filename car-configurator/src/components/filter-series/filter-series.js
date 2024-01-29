import "./filter-series.css";

const FilterSeries = ({ selectedSeries, setSelectedSeries }) => {
  const handleSeriesChange = (e) => {
    setSelectedSeries(e.target.value);
  };

  return (
    <div className="seiesFilter">
      <label className="seriesFilterLabel" htmlFor="seriesFilter">
        Filter by Series
      </label>
      <select
        className="seriesFilterSelect"
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
  );
};

export default FilterSeries;
