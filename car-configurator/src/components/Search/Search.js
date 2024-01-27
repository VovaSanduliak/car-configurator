import { useTranslation } from "react-i18next";

const Search = ({ search, setSearch }) => {
  const { t } = useTranslation();

  return (
    <form>
      <label htmlFor="search">Search</label>
      <input
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
