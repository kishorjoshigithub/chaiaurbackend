import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
// To allow cross-origin requests
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// To accept JSON data from the client side
app.use(
  express.json({
    limit: "16kb",
  })
);

// To accept form data from URL
app.use(express.urlencoded({ extended: true }));

//static assets
app.use(express.static("public"));

//cookie parser
app.use(cookieParser());

//routes
import userRouter from "./routes/user.routes.js";

//routes declearation
app.use("/api/v1/users", userRouter);

export default app;
