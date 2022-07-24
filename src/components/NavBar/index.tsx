import { Link } from "react-router-dom";

const NavBar = () => (
  <div style={{ position: "sticky", top: "0", backgroundColor: "#ffbfba" }}>
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
        <Link to="/">Main</Link>
      </li>
      <li style={{ margin: "0 10px" }}>
        <Link to="/shopping">Shopping</Link>
      </li>
      <li style={{ margin: "0 10px" }}>
        <Link to="/history">History</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;