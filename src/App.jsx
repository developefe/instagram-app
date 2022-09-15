import React, { useEffect, useRef, useState } from 'react';
import {useRoutes} from 'react-router-dom';
import routes from "./Routes";
import {Toaster} from "react-hot-toast";
import { useSelector } from 'react-redux';
import Loader from './components/loader';

function App() {

    const user = useSelector(state => state.auth.user)
    const showRoutes = useRoutes(routes);
    const [redirect, setRedirect] = useState();

    useEffect(() => {

        let timeout = setTimeout(() => {
            setRedirect(true)
        }, 500);

        return() => {
            clearTimeout(timeout)
        }
    }, [])


    if (!user && !redirect) {
        return(<Loader/>)
    }
    return(
        <>
            <Toaster position="top-right" />
            {showRoutes}

        </>
    )
}

export default App;