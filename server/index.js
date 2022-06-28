const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const server = express();

const userRoutes = require("./src/api/routes/user.routes");
const painterRoutes = require("./src/api/routes/painter.routes");
const paintingRoutes = require("./src/api/routes/painting.routes");

const { connect } = require("./src/config/database");
connect();

//SECRETKEY
server.set("secretKey", process.env.API_SECRET);

//HEADERS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//JSON
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//CORS
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use("/users", userRoutes);
server.use("/painters", painterRoutes);
server.use("/paintings", paintingRoutes);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
