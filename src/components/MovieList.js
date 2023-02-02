import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ mode }) => {
    const [isLoadingData, setisLoadingData] = useState(false);
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);

    useEffect(() => {
        getAllMovies()
    }, [])

    async function getAllMovies() {
        setisLoadingData(true);
        setShowData(true)
        await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8ba633938500db5ea65fc2c09a31599c&language=en-US&page=1')
            .then((res) => {
                // console.log(res.data.results);
                setisLoadingData(false);
                setData(res.data.results)
            })
            .catch((Err) => {
                // console.log(Err)
            })
    }
    return (
        <>
            <div className="container">
                <div className='row my-4' style={{
                    color: mode === 'dark' ? 'white' : 'black',

                }} >
                    {showData ? (
                        isLoadingData ? (
                            <h1 style={{ color: '#0d6efd' }}>"Loading Movies..."</h1>
                        ) : (
                            data.map((movies, i) => (
                                <>

                                    <div className="col-lg-3 col-md-6 col-sm-12" key={i} >
                                        <div className="card  mx-auto shadow-sm  mb-5 bg-body rounded" style={{
                                            margin: '20px',
                                            backgroundColor: mode === 'dark' ? '#181a1c' : 'white', color: mode === 'dark' ? 'white' : 'black',
                                        }}>
                                            <img src={'https://image.tmdb.org/t/p/w440_and_h660_face/' + movies.poster_path}
                                                className="card-img-top img-fluid" alt="img" style={{
                                                    // width: '131px',
                                                    // height: '131px',
                                                    // marginLeft: '15px',
                                                    // marginTop: '10px'
                                                }} />
                                            <div className="card-body" style={{
                                                backgroundColor: mode === 'dark' ? '#181a1c' : 'white', color: mode === 'dark' ? 'white' : 'black'
                                            }}>
                                                <h3 className="card-title" style={{
                                                    color: mode === 'dark' ? 'white' : 'black'
                                                }}>Movie Title</h3>
                                                <p className="card-text" style={{
                                                    color: mode === 'dark' ? 'white' : 'black',
                                                }}>{movies.title}</p>
                                                <h3 className="card-title" style={{
                                                    color: mode === 'dark' ? 'white' : 'black'
                                                }}>Release Date</h3>
                                                <p className="card-text" style={{
                                                    color: mode === 'dark' ? 'white' : 'black',
                                                }}>{movies.release_date}</p>
                                                <Link onClick={movies.id} className='btn btn-primary'
                                                    to={{
                                                        pathname: "/MovieDetail",
                                                    }}
                                                >Movie Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        )
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>

        </>
    )
}

export default MovieList;