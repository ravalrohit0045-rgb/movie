import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "../redux/actions/movieActions";

export default function MovieDetails() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { details } = useSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieDetails(id));
    }, [dispatch, id]);

    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={details.poster_path} className="img-fluid" alt=""/>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={details.poster_path} className="card-img-top" alt=""/>
                    </div>
                </div>
                <div className="col-md-8">

                    <h2>{details.title}</h2>
                    <p>{details.overview}</p>
                    <h5>Rating : {details.vote_average}</h5>
                    <h5>Release : {details.release_date}</h5>
                    <h5>Genre : {details.genre}</h5>
                    <h5>Cast : {details.cast}</h5>
                    <h5>Language : {details.original_language}</h5>
                </div>
            </div>
        </div>
    )

}