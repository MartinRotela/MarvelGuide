import SearchBar from "./Components/SearchBar";
import "./App.css";
import SearchResultsComics from "./Components/SearchResultsComics";
import { useState, useEffect } from "react";

function ComicsPage() {
  const [search, SetSearch] = useState(null);
  function handleChange(e) {
    e.preventDefault();
    SetSearch(e.target.value);
  }
  return (
    <div className="ComicsPage MainPage">
      <SearchBar onChange={handleChange} search={search} />
      <SearchResultsComics search={search} />
    </div>
  );
}

export default ComicsPage;
