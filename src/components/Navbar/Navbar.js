import React from 'react'
import "./Navbar.css";


/**
 *Functional Component for the NavBar presenting general information about the user.
 *
 * @callback
 * @returns {React.ElementType}

 */

/**
* @param {Object} props
* @param {String} props.user.avatar_url
* @param {String} props.user.name
*/

const Navbar = ({ user }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <img
      src={user.avatar_url}
      width="50"
      height="50"
      className="me-4 ms-3 avatar"
      alt="user"
    />
    <h3 style={{ color: "white"  }}>{user.name}</h3>
    <a className="ms-auto d-flex align-items-center" href="/">
  Search Other User
    </a>    
  </nav>
);

export default Navbar