import { useState } from "react";
import { Menu } from "../MenuItems/menu";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <img src="../log.png" alt="Logo not found" className="logo" />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar ${menuOpen ? "show" : ""}`}>
        {Menu.map((item) => (
          <li key={item.id} className="nav2">
            {item.name === "Login" ? (
              <button
                onClick={handleClick}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  fontWeight:"bold",
                  fontSize: "20px",
                  color:"#551A8b"
                }}
              >
                {item.name}
              </button>
            ) : (
              <Link to={`${item.path}`} style={{textDecoration:"none",border:"none",outline:"none"}} >
              {
                item.name
              }
              </Link>
              
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Header;
