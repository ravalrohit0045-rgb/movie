import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {

        localStorage.removeItem("login");

        navigate("/login");

    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Movie App
                </Link>

                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">Favorites</Link>
                        </li>

                        <li className="nav-item">
                            <button
                                className="btn btn-link nav-link"
                                onClick={handleLogout}
                            >
                                Login
                            </button>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}