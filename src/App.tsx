import React from 'react';
import './app.css';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <>
            <ToastContainer />
            <Routes />
        </>
    )
}

export default App;