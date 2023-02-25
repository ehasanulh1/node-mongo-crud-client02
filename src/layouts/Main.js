import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home /</Link>
                <Link to='/users/add'>Add User /</Link>
                <Link to='/update'>Update User</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;