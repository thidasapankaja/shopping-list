import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => (
  <div
    style={{
      position: "sticky",
      top: "0",
      backgroundColor: "#2e8cff",
      zIndex: "3",
      height: "60px",
    }}
  >
    <ul
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px",
        listStyleType: "none",
        margin: "0",
      }}
    >
      <li style={{ margin: "0 10px" }}>
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
      </li>
      <li style={{ margin: "0 10px" }}>
        <Link style={{ textDecoration: "none" }} to="/shopping">
          Shopping
        </Link>
      </li>
      <li style={{ margin: "0 10px" }}>
        <Link style={{ textDecoration: "none" }} to="/history">
          History
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
