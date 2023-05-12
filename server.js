import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";

import connection from "./config/db.js";
import authRouter from "./router/authRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import productRouter from "./router/productRouter.js";
import cors from "cors";

//configure env
dotenv.config();

//database config
connection();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);

//rest API
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Ecomerce app",
  });
});

//PORT
const PORT = process.env.PORT || 8080;
//PORT USING
app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgBlue
      .green
  );
});