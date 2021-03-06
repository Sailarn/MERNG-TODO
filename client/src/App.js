import React from 'react';
import {BrowserRouter, Route, Redirect} from "react-router-dom";

import './App.css';

import AuthRoute from "./util/AuthRoute";
import {AuthProvider} from "./context/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar"


function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <NavBar/>
                <Route exact path="/" component={Home}/>
                <AuthRoute exact path="/login" component={Login}/>
                <AuthRoute exact path="/register" component={Register}/>
                <Redirect to="/"/>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
