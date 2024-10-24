import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./Routers/productRouter.js"

//dotenv config
dotenv.config();

//initalize
const app = express();


//cors middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//default middleware for req.body
app.use(express.json())

//Default route for cannot.get
app.get("/", (req, res) => {
  res.status(200).send("Welcome to our API");
});

//custom route from routers
app.use("/api/product",productRoute)

//port declare
const port = process.env.PORT || 4000;

//start the server
app.listen(port, () => {
  console.log("Server started and running on the port");
});
