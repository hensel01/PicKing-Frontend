import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    
    return (
        <div id="navbar">
            <ul>
            <li><Link to="/welcome">Home</Link></li>
            <li><Link to="/matchups">Matchups</Link></li>
            <li><Link to="/playoffmatchups">Playoff Matchups</Link></li>
            <li><Link to="/leaderboards">Leaderboards</Link> </li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/groups">Groups</Link></li>
            </ul>
        </div>
    )
}
  
export default Navbar;