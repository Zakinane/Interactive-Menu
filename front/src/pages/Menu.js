import { useEffect, useState } from "react";
import "./Menu.css";
import chicken from "../assets/img/chicken.png";
import burger from "../assets/img/burger.png";
import putine from "../assets/img/putine.png";
import fries from "../assets/img/fries.png";
import cafe from "../assets/img/cafe.png";
import wraps from "../assets/img/wraps.png";
import offer from "../assets/img/offer.png";
import salad from "../assets/img/salad.png";

const staticDishes = [
  { id: "s1", name: "New in the Club", image: chicken },
  { id: "s2", name: "BURGER", image: burger },
  { id: "s3", name: "SIDES", image: putine },
  { id: "s4", name: "FRIES", image: fries },
  { id: "s5", name: "DESERTS AND BEVEREGES", image: cafe },
  { id: "s6", name: "LAUNCH OFFER @99", image: offer },
  { id: "s7", name: "WRAPS", image: wraps },
  { id: "s8", name: "SALADS", image: salad },
];

function Menu() {
  const [dbDishes, setDbDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/dishes")
      .then((res) => res.json())
      .then((data) => setDbDishes(data))
      .catch((err) => console.error("Erreur fetch plats:", err));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:5000/dishes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setDbDishes((prev) => prev.filter((dish) => dish._id !== id));
      })
      .catch((err) => console.error("Erreur suppression :", err));
  }

  return (
    <div className="menu">
      <h1 id="menu-title">MENU</h1>
      <div className="items">
        {/* plats statiques */}
        {staticDishes.map((dish) => (
          <div key={dish.id} className="item">
            <img src={dish.image} alt={dish.name} />
            {dish.name}
          </div>
        ))}

        {/* plats MongoDB */}
        {dbDishes.map((dish) => (
          <div key={dish._id} className="item">
            <button
              className="delete-btn"
              onClick={() => handleDelete(dish._id)}
            >
              ✖
            </button>
            <img src={dish.imageURL} alt={dish.name} />
            {dish.name} <br />
            <span>{dish.price} €</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
