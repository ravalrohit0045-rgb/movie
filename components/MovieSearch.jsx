import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../redux/actions/movieActions";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function MovieSearch() {

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.movie);
    const handleSearch = () => {
        dispatch(searchMovies(search));
    };

    useEffect(() => {
        if (search.trim() !== "") {
            dispatch(searchMovies(search));
        }
    }, [search, dispatch]);

    return (

        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-md-10">
                    <input type="text" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>

                <div className="col-md-2">
                    <button className="btn btn-success w-100" onClick={handleSearch}> Search</button>
                </div>
            </div>

            <div className="row mt-4">
                {
                  movies.map(movie => (
                    <div className="col-md-3 mb-4" key={movie.id}>
                        <div className="card">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5>{movie.title}</h5>
                                <Link to={`/movie/${movie.id}`} className="btn btn-primary"> Details </Link>
                            </div>
                        </div>
                    </div>
                )) } 
            </div>
        </div>
    )

}