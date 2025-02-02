require("dotenv").config;
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie middleware
app.use(cookieParser());

// Routes
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

app.use("/api", userRoutes);
app.use("/api", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});

module.exports = app;
