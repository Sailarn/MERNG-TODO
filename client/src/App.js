import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
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
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
