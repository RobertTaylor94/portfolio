import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul>
        <li>
        <NavLink
          to="/"
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
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
            Contact
        </NavLink>
        </li>
    </ul>
  )
}

export default NavTabs;
