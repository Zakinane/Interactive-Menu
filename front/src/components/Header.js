import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">BURGUR</div>
      <div className="list-nav">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <div>Shop</div>
      </div>
    </header>
  );
}

export default Header;
