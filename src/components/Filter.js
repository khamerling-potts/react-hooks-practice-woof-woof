function Filter({ goodFilter, setGoodFilter }) {
  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={(e) => setGoodFilter(!goodFilter)}>
        {goodFilter ? "Filter good dogs: ON" : "Filter good dogs: OFF"}
      </button>
    </div>
  );
}
export default Filter;
