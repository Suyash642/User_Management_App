import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container-fluid">
                {/* When clicked on User Management, page reloads to /users  */}
                <a className="navbar-brand fw-bold" href="#">
                    <i className="bi bi-people-fill fs-2"></i>
                </a>

                {/* Hamburger Menu button with collapse on click feature  */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon" />
                </button>

                {/* 
                    collapse navbar-collapse => Ensures the navbar collapses on small screens.
                    id="navbarNav" => Matches the data-bs-target attribute in the toggle button. 
                */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">User Details</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/viewUser/1">View User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addUser">Add User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/editUser/1">Update User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/deleteUser/1">Delete User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/user/update-password/1">Update Password</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
