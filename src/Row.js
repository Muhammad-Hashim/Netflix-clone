import React from 'react';
import { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css'
const base_url="https://image.tmdb.org/t/p/original";
import YouTube from  'react-youtube';


const Row = ({ title, fetchUrl ,islargeRow }) => {

    const [movies, setMoves] = useState([])
    const [trailerUrl,settrailerUrl]=useState()


    useEffect(() => {
        

        async function fetchData() {
            const request = await axios.get(fetchUrl);

            setMoves(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    }
  }


    return (
        <>
            <div className="row">

                <h2>{title}</h2>
                <div className="row_posters">
                    {
                        movies.map(move => (
                            <img  
                            key={move.id}
                            className={`row_poster ${islargeRow && "row_posterlarge"}`}
                            src={`${base_url}${islargeRow ? move.poster_path : move.backdrop_path}`} alt={move.name} />
                        ))
                    }
                </div>
                <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
            </div>
        </>
    )
}


export default Row;