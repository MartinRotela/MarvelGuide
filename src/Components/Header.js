import logo from "../Assets/logo.png";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="icon">
          <Link to="/">
            <img src={logo} alt="Icon" />
          </Link>
        </div>
        <div className="buttons">
          <NavLink to="/">
            <p>Characters</p>
          </NavLink>
          <NavLink to="/comics">
            <p>Comics</p>
          </NavLink>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
