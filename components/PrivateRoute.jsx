import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {

    const login = localStorage.getItem("login");

    return login === "true" ? children : <Navigate to="/login" />;

}