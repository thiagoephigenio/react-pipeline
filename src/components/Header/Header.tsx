import "./Header.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/home" className="headerMenu link">
          Home
        </Link>

        <div className="header-float-right">
          <NavLink to="/fechamento" className="headerMenu link">
            Fechamento
          </NavLink>
        </div>
        <div className="header-float-right-logout">
          <span onClick={(e) => {}}>
            <a href="." className="link">Logout</a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
