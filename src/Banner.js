import React from "react";
import { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./Request";
import "./Banner.css";

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movie?.name || movie?.title || movie?.orginal_name}
          </h1>

          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My list</button>
          </div>
          <h1 className="bannner_description">{movie?.overview}</h1>
        </div>
        <div className="banner_fad"> </div>
      </header>
    </div>
  );
}

export default Banner;
