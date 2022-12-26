import React, { useState, useEffect } from 'react';

const MovieList = () => {
    const [isLoadingData, setisLoadingData] = useState(false);
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);
    const colors = ['#e6f6fe', '#cdeefd', '#b3e5fc', '#9addfb', '#81d4fa', '#68cbf8', '#4fc3f7', '#35baf6', '#e6f6fe', '#cdeefd', '#b3e5fc', '#9addfb', '#81d4fa', '#68cbf8', '#4fc3f7', '#35baf6', '#e6f6fe', '#cdeefd', '#b3e5fc', '#9addfb',]

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
                            <div className="container" key={i}>
                                <p>{movies.title}</p>
                            </div>
                        ))
                    )
                ) : (
                    <div></div>
                )}
            </div>
        </>
    )
}

export default MovieList;