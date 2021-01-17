import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function NavTab() {

  const location = useLocation();
  return (
    <div class="container col-12">
      <nav class="navbar justify-content-end fixed">
        <div class="col-2 nav-links">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            ______  Home
                    </Link>

          <Link to="/About" className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
            ______ About
                    </Link>

          <Link
            to="/Projects"
            className={location.pathname === "/Project" ? "nav-link active" : "nav-link"}
          >
            _______ Projects
                    </Link>

          <Link
            to="/Skills"
            className={location.pathname === "/Skills" ? "nav-link active" : "nav-link"}
          >
            ______ Skills
              </Link>

        </div>
      </nav>
    </div>
  );
}

export default NavTab;
