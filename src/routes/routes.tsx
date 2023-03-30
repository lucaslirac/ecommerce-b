import { useContext } from "react";
import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";


export default function Routes() {

    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}