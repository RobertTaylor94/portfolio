import React from "react";
import './navtabs.css';
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul>
        <li>
        <NavLink
          to="/portfolio"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        </li>
        <li>
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
        </li>
        <li>
        <NavLink
          to="/gallery"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Gallery
        </NavLink>
        </li>
    </ul>
  )
}

export default NavTabs;
