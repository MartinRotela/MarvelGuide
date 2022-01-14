import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import { useState } from "react";
import "./MainPage.css";

function MainPage() {
  const [search, SetSearch] = useState(null);
  function handleChange(e) {
    e.preventDefault();
    SetSearch(e.target.value);
  }
  return (
    <div className="main-page">
      <SearchBar onChange={handleChange} search={search} />
      <SearchResults search={search} />
    </div>
  );
}

export default MainPage;
