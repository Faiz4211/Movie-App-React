import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
    const [isLoadingData, setisLoadingData] = useState(false);
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);
    useEffect(() => {
        setisLoadingData(true);
        setShowData(true)
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=8ba633938500db5ea65fc2c09a31599c&language=en-US&page=1";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setisLoadingData(false);
                setData(json["results"])
                console.log(data);
            })
            .catch((error) => console.log(error));

    }, [])
    return (
        <>
            <div className='container my-4' >
                {showData ? (
                    isLoadingData ? (
                        <h1>"Loading Movies..."</h1>
                    ) : (
                        data.map((movies, i) => (
                            <>
                                <div class="card" >
                                    <img src={'https://image.tmdb.org/t/p/w440_and_h660_face/' + movies.poster_path}
                                        class="card-img-top" alt="img" style={{
                                            width: '131px',
                                            height: '131px',
                                            marginLeft: '15px'
                                        }} />
                                    <div class="card-body">
                                        <h5 class="card-title">Movie Title</h5>
                                        <p class="card-text">{movies.title}</p>
                                        <h5 class="card-title">Release Date</h5>
                                        <p class="card-text">{movies.release_date}</p>
                                        <a  class="btn btn-primary">Explore Details</a>
                                    </div>
                                </div>
                            </>
                        ))
                    )
                ) : (
                    <p></p>
                )}
            </div>
        </>
    )
}

export default MovieList;