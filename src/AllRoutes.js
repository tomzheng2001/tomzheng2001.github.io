import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Landing /> } />
            </Routes>
        </Router>
    );
};

export default AllRoutes;