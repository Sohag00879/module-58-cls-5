import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import './Header.css';

const Header = () => {
    const {user, logout} = useFirebase();
    return(
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">Registration</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName}</span>
            {user?.email && <button onClick={logout}>Log out</button>}
        </div>
    );
};
export default Header;
