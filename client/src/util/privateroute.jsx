import React from 'react'
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Privateroute = () => {
    const { user } =
        useGlobalContext();
    const navigate = useNavigate()
    return (user ? navigate("/login") : <Outlet />)
}

export default Privateroute
