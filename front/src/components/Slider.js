import { NavLink } from "react-router-dom";
import "./Slider.css";

function Slider() {
  return (
    <div className="slider">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "slider-btn active" : "slider-btn"
        }
      ></NavLink>

      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive ? "slider-btn active" : "slider-btn"
        }
      ></NavLink>

      <NavLink
        to="/add-item"
        className={({ isActive }) =>
          isActive ? "slider-btn active" : "slider-btn"
        }
      ></NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "slider-btn active" : "slider-btn"
        }
      ></NavLink>
    </div>
  );
}

export default Slider;
