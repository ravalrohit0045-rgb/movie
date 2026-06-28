import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/movieActions";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { addFavorite } from "../redux/actions/movieActions";

export default function MovieList() {

    const dispatch = useDispatch();

    const { movies, loading, error } = useSelector(state => state.movie);
    

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (loading) return <Loader />;

    return (

        <div className="container mt-4">

            <div className="row">

                {movies.map(movie => (

                    <div className="col-md-3 mb-4" key={movie.id}>

                        <div className="card h-100">

                            <img
                                src={movie.poster_path}
                                alt=""
                                className="card-img-top"
                            />

                            <div className="d-grid gap-2">

                                <Link
                                    to={`/movie/${movie.id}`}
                                    className="btn btn-primary"
                                >
                                    Details
                                </Link>

                                <button
                                    className="btn btn-warning"
                                    onClick={() => dispatch(addFavorite(movie))}
                                >
                                    Favorite
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )

}