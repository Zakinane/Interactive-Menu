const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const dishRoutes = require("./routes/dishRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/dishes", dishRoutes);

// Connexion DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connecté");
    app.listen(process.env.PORT, () =>
      console.log(`Serveur lancé sur http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error("Erreur MongoDB:", err)); 
