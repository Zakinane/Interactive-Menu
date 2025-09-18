import "./Home.css";
import burgerMain from "../assets/img/Default_burger_cinematic_and_of_different_types_flying_burger_1-removebg-preview 1.png"

function Home() {
  return (
    <div className="home">
      <div className="title">
        <span id="the-ultimate">THE ULTIMATE</span>
        <span id="burger-club">Burger Club</span>
        <span id="savor-the-flavor"> Savor the Flavor, Join the club!</span>
      </div>
      <div className="burger-main">
        <img src={burgerMain} alt="Burg" />
      </div>
      
    </div>
  );
}

export default Home;
