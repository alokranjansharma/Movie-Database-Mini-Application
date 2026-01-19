import { useFilter } from "../context/FilterContext";

export default function Filter() {
  const { searchValue, setSearchValue, resetFilter } = useFilter();

  return (
    <div className="filterWrap">
      <input
        type="text"
        value={searchValue}
        placeholder="Search movies (e.g. 'star', 'interstllar')"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <button className="resetFilter" onClick={resetFilter}>
          Reset
        </button>
      )}
      
    </div>
  );
}
