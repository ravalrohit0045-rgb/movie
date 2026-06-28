import React from "react";
import { useSelector } from "react-redux";

export default function Favorite() {

    const { favorites } = useSelector(state => state.movie);

    return (

        <div className="container mt-4">
            <h2>Favorite Movies</h2>
            <div className="row">
                {
                    favorites.map(movie => (
                        <div className="col-md-3" key={movie.id}>
                            <div className="card">
                                <img src={movie.poster_path} className="card-img-top" />
                                <div className="card-body">
                                    <h5>{movie.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )

}