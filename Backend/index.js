import dotenv from "dotenv";
import DB_connect from "./database/DB_connect.js";
import app from "./app.js";

// dotenv Configuration
dotenv.config({
  path: "./.env",
});

DB_connect();

// Listening the port
// app.listen(process.env.PORT, () => {
//   console.log(`Server is Running on ${process.env.PORT}`);
//   console.log(`Frontend URI : ${process.env.FRONTEND_URI}`);
// });

export default app;
