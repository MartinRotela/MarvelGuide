import "./Header.css";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import "./SearchResults.css";
import CharacterCard from "./CharacterCard";

function FeaturedCharacters(props) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/comics/${props.comicId}/characters?ts=1&apikey=0876ab968ff9c4a67a2c8b20597d3bab&hash=c3c570c630c422225eb755336df18051`
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.comicId]);

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="characters">
          {data.data.results.map((comic, i) => {
            return (
              <CharacterCard
                path={comic.thumbnail.path}
                extension={comic.thumbnail.extension}
                name={comic.name}
                key={i}
                id={comic.id}
              />
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
}

export default FeaturedCharacters;
