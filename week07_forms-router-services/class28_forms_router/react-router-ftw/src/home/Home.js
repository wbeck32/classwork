import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            Welcome to awesome nachos!
            <Link to="/menu">Check out our menu</Link>
        </div>
    ) 
}