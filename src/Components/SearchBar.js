import React, { useState, useEffect } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [search, SetIsOnline] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
  }
  useEffect(() => {
    SetIsOnline(props.search);
  }, [props.search]);

  return (
    <div className="search-bar">
      <input
        type="search"
        id="search"
        placeholder="Search..."
        onSubmit={handleSubmit}
        onChange={props.onChange}
      />
    </div>
  );
}

export default SearchBar;
