import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  // const [FormSearch, setFormSearch] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            AppClima
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-primary rounded-3 fw-semibold" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active rounded-3 fw-semibold" : ""}`
                }
                // onClick={setFormSearch(true)}
                to="/clima-por-pais"
              >
                Clima por ciudad
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active rounded-3 fw-semibold" : ""}`
                }
                // onClick={setFormSearch(true)}
                to="/clima-por-ciudad"
              >
                Clima por pais
              </NavLink>
            </ul>
            {/* {!FormSearch }? (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            ) : (
              <h1>hello</h1>
            ) */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
