import React, { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import Error from "./Components/Error";
import { useLocation } from "react-router-dom";
import "./CharacterPage.css";
import "./ComicsPage.css";
import FeaturedCharacters from "./Components/FeaturedCharacters";
import BackButton from "./Components/BackButton";

function CharacterPage(props) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/comics/${location.search.substr(
          1
        )}?ts=1&apikey=0876ab968ff9c4a67a2c8b20597d3bab&hash=c3c570c630c422225eb755336df18051`
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
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <BackButton />
          <div className="page-artist page-comic">
            <img
              src={
                data.data.results[0].thumbnail.path +
                "." +
                data.data.results[0].thumbnail.extension
              }
              alt=""
            />
            <h2>{data.data.results[0].title}</h2>
            <p>{data.data.results[0].description}</p>
          </div>
          <div className="related-comics">
            <h3>Characters</h3>
            <FeaturedCharacters comicId={location.search.substr(1)} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default CharacterPage;
