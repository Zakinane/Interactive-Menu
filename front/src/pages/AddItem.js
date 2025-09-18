import { useState } from "react";
import "./AddItem.css";

function AddItem() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageURL: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/dishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Plat ajouté avec succès !");
        setFormData({ name: "", description: "", price: "", imageURL: "" }); // reset form
      } else {
        setMessage("Erreur lors de l'ajout du plat.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setMessage("Erreur serveur");
    }
  }

  return (
    <div className="add-item">
      <h1>Add a Dish</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name of the Dish"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageURL"
          placeholder="URL of the Image"
          value={formData.imageURL}
          onChange={handleChange}
        />
        <button type="submit">Ajouter</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddItem;
