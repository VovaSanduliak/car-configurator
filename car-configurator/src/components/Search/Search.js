import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Search = ({ search, setSearch }) => {
  const { t } = useTranslation();

  return (
    <form>
      <input
        style={{ marginTop: "10px" }}
        className="input-search"
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
