import "./Header.css";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import CharacterCard from "./CharacterCard";
import "./SearchResults.css";

function SearchResults(props) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    let search = "";

    if (props.search !== "" && props.search != null) {
      search = "nameStartsWith=" + props.search + "&";
    } else {
      search = "";
    }
    const fetchData = async () => {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?${search}ts=1&apikey=0876ab968ff9c4a67a2c8b20597d3bab&hash=c3c570c630c422225eb755336df18051`
      );
      const data = await response.json();
      if (data.error) {
        setLoading(false);
        setError(true);
      } else {
        setData(data);
        setLoading(false);
      }
    };
    fetchData();
  }, [props.search]);

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="characters">
          {data.data.results.map((character, i) => {
            return (
              <CharacterCard
                path={character.thumbnail.path}
                extension={character.thumbnail.extension}
                name={character.name}
                key={i}
                id={character.id}
              />
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
}

export default SearchResults;
