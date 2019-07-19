import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import {AuthProvider} from "./context/auth";
import NavBar from "./components/NavBar"

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <NavBar/>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
