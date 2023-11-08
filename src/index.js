import express from "express";
import { userRouter } from "./routes/user.route.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log("Server is running ", PORT);
});
